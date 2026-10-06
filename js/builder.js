/* ============================================================
   PCraft Builder - Compatibility + Score + Benchmark + AI + Share
   ============================================================ */

const build = {
  case: null, motherboard: null, cpu: null, gpu: null,
  ram: null, storage: null, psu: null, cooler: null
};

let currentStep = 0;
let currentFilter = { brand: '', sort: 'default' };

/* ---------- Compatibility ---------- */
function getIncompatibilityReason(product, category) {
  if (category === 'motherboard' && build.case) {
    if (!build.case.formFactor.includes(product.formFactor))
      return `فرم‌فکتور ${product.formFactor} با کیس انتخاب‌شده سازگار نیست.`;
  }
  if (category === 'gpu' && build.case) {
    if (product.length > build.case.maxGpuLength)
      return `طول کارت (${product.length}mm) از حداکثر کیس (${build.case.maxGpuLength}mm) بیشتر است.`;
  }
  if (category === 'cooler' && build.case) {
    if (product.type === 'Air' && product.height > build.case.maxCoolerHeight)
      return `ارتفاع کولر (${product.height}mm) از حداکثر کیس (${build.case.maxCoolerHeight}mm) بیشتر است.`;
    if (product.type === 'AIO' && product.radiator > build.case.maxRadiator)
      return `رادیاتور ${product.radiator}mm با حداکثر کیس (${build.case.maxRadiator}mm) سازگار نیست.`;
  }
  if (category === 'cpu' && build.motherboard) {
    if (product.socket !== build.motherboard.socket)
      return `سوکت این پردازنده (${product.socket}) با مادربرد (${build.motherboard.socket}) سازگار نیست.`;
  }
  if (category === 'ram' && build.motherboard) {
    if (product.type !== build.motherboard.ramType)
      return `نوع رم (${product.type}) با مادربرد (${build.motherboard.ramType}) سازگار نیست.`;
  }
  if (category === 'storage' && build.motherboard) {
    if (product.form === 'M.2' && build.motherboard.m2Slots < 1)
      return 'این مادربرد اسلات M.2 ندارد.';
  }
  if (category === 'psu' && build.gpu) {
    if (product.wattage < build.gpu.recommendedPsu)
      return `توان پاور (${product.wattage}W) کمتر از مقدار پیشنهادی GPU (${build.gpu.recommendedPsu}W) است.`;
  }
  if (category === 'cooler' && build.cpu) {
    if (!product.sockets.includes(build.cpu.socket))
      return `این خنک‌کننده از سوکت ${build.cpu.socket} پشتیبانی نمی‌کند.`;
  }
  if (category === 'cpu' && build.cooler) {
    if (!build.cooler.sockets.includes(product.socket))
      return `خنک‌کننده انتخاب‌شده از سوکت این پردازنده پشتیبانی نمی‌کند.`;
  }
  if (category === 'case' && build.gpu) {
    if (build.gpu.length > product.maxGpuLength)
      return `کارت گرافیک انتخاب‌شده (${build.gpu.length}mm) در این کیس جا نمی‌شود.`;
  }
  return null;
}

function isCompatible(product, category) {
  return getIncompatibilityReason(product, category) === null;
}

/* ---------- Compatibility Score (0-100) ---------- */
function getCompatScore(product, category) {
  if (!isCompatible(product, category)) return 0;
  let score = 70;

  if (category === 'cpu' && build.motherboard) {
    score += 15;
    if (product.gamingScore >= 90) score += 10;
    else if (product.gamingScore >= 80) score += 5;
  }
  if (category === 'ram' && build.motherboard) {
    score += 10;
    if (product.speed >= 6000) score += 10;
    if (product.capacity >= 32) score += 5;
  }
  if (category === 'gpu' && build.case) {
    const room = build.case.maxGpuLength - product.length;
    if (room > 50) score += 10;
    else if (room > 20) score += 5;
  }
  if (category === 'psu' && build.gpu) {
    const headroom = product.wattage - build.gpu.recommendedPsu;
    if (headroom >= 200) score += 15;
    else if (headroom >= 100) score += 10;
    else if (headroom >= 50) score += 5;
  }
  if (category === 'cooler' && build.cpu) {
    if (product.tdpSupport >= build.cpu.tdp + 50) score += 15;
    else if (product.tdpSupport >= build.cpu.tdp) score += 8;
  }
  if (category === 'motherboard' && build.case) {
    if (product.formFactor === 'ATX') score += 5;
    if (product.ramType === 'DDR5') score += 5;
    if (product.m2Slots >= 3) score += 5;
  }
  return Math.min(100, score);
}

function scoreBadge(score) {
  if (score >= 90) return `<span class="score-badge score-excellent">${score}</span>`;
  if (score >= 75) return `<span class="score-badge score-good">${score}</span>`;
  if (score >= 60) return `<span class="score-badge score-ok">${score}</span>`;
  return `<span class="score-badge score-low">${score}</span>`;
}

/* ---------- Benchmark Estimation ---------- */
function estimateBenchmark() {
  const cpu = build.cpu;
  const gpu = build.gpu;
  if (!cpu || !gpu) return null;

  const cpuS = cpu.gamingScore || 70;
  const gpuS = gpu.gamingScore || 70;
  // Weighted: GPU matters more for gaming
  const combined = Math.round(cpuS * 0.35 + gpuS * 0.65);

  const fps1080 = Math.round(combined * 1.8);
  const fps1440 = Math.round(combined * 1.25);
  const fps4k = Math.round(combined * 0.7);

  return {
    score: combined,
    fps1080: Math.min(fps1080, 300),
    fps1440: Math.min(fps1440, 200),
    fps4k: Math.min(fps4k, 120),
    label: combined >= 95 ? 'عالی (۴K/۱۴۴۰p)' :
           combined >= 85 ? 'خیلی خوب (۱۴۴۰p)' :
           combined >= 75 ? 'خوب (۱۰۸۰p بالا)' :
           combined >= 65 ? 'متوسط (۱۰۸۰p)' : 'مبتدی'
  };
}

/* ---------- AI Opinion ---------- */
function getAIOpinion() {
  const parts = Object.values(build).filter(Boolean);
  if (parts.length === 0) return AI_OPINIONS.empty;
  if (parts.length < 3) return AI_OPINIONS.partial_low;

  const cpu = build.cpu;
  const gpu = build.gpu;
  const psu = build.psu;
  const total = parts.reduce((s, p) => s + p.price, 0);

  if (cpu && gpu) {
    const diff = (gpu.gamingScore || 70) - (cpu.gamingScore || 70);
    if (diff > 15) return AI_OPINIONS.bottleneck_cpu;
    if (diff < -15) return AI_OPINIONS.bottleneck_gpu;
  }

  if (gpu && (!psu || psu.wattage < gpu.recommendedPsu)) return AI_OPINIONS.incomplete_psu;

  if (parts.length >= 7) {
    if (total > 120000000) return AI_OPINIONS.overkill;
    if (cpu && gpu && (cpu.gamingScore >= 90 || gpu.gamingScore >= 90)) return AI_OPINIONS.complete_excellent;
    if (cpu && cpu.cores >= 12) return AI_OPINIONS.workstation;
    return AI_OPINIONS.complete_excellent;
  }

  if (total < 45000000) return AI_OPINIONS.budget_friendly;
  if (cpu && gpu && (cpu.gamingScore + gpu.gamingScore) / 2 >= 88) return AI_OPINIONS.gaming_high;
  return AI_OPINIONS.balanced_mid;
}

/* ---------- Share Build ---------- */
function encodeBuild() {
  const ids = {};
  Object.keys(build).forEach(k => { if (build[k]) ids[k] = build[k].id; });
  return btoa(JSON.stringify(ids));
}

function decodeBuild(hash) {
  try {
    const ids = JSON.parse(atob(hash));
    Object.keys(ids).forEach(cat => {
      const list = PRODUCTS[cat];
      if (list) {
        const found = list.find(p => p.id === ids[cat]);
        if (found) build[cat] = found;
      }
    });
    return true;
  } catch (e) { return false; }
}

function shareBuild() {
  const hash = encodeBuild();
  const url = window.location.origin + window.location.pathname + '#build=' + hash;
  navigator.clipboard.writeText(url).then(() => {
    alert('لینک بیلد کپی شد!\n\n' + url);
  }).catch(() => {
    prompt('لینک بیلد را کپی کنید:', url);
  });
}

function loadFromHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#build=')) {
    const data = hash.slice(7);
    if (decodeBuild(data)) {
      renderAll();
    }
  }
}

/* ---------- UI ---------- */
function renderSteps() {
  const container = document.getElementById('builder-steps');
  if (!container) return;
  container.innerHTML = BUILDER_STEPS.map((step, i) => {
    const filled = build[step.key] !== null;
    let cls = 'step-item';
    if (i === currentStep) cls += ' active';
    if (filled) cls += ' completed';
    return `<div class="${cls}" data-step="${i}" onclick="goToStep(${i})">
      <div class="step-num">مرحله ${i + 1}</div>
      <div class="step-label">${step.label}</div>
    </div>`;
  }).join('');
}

function getFilteredProducts(category) {
  let list = [...(PRODUCTS[category] || [])];
  if (currentFilter.brand) {
    list = list.filter(p => p.brand === currentFilter.brand);
  }
  if (currentFilter.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  else if (currentFilter.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (currentFilter.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  else if (currentFilter.sort === 'compat') {
    list.sort((a, b) => getCompatScore(b, category) - getCompatScore(a, category));
  }
  return list;
}

function getBrands(category) {
  const brands = new Set((PRODUCTS[category] || []).map(p => p.brand));
  return [...brands].sort();
}

function renderFilters() {
  const container = document.getElementById('builder-filters');
  if (!container) return;
  const step = BUILDER_STEPS[currentStep];
  const brands = getBrands(step.key);
  container.innerHTML = `
    <select class="filter-select" id="filter-brand" onchange="applyFilter()">
      <option value="">همه برندها</option>
      ${brands.map(b => `<option value="${b}" ${currentFilter.brand === b ? 'selected' : ''}>${b}</option>`).join('')}
    </select>
    <select class="filter-select" id="filter-sort" onchange="applyFilter()">
      <option value="default" ${currentFilter.sort === 'default' ? 'selected' : ''}>مرتب‌سازی پیش‌فرض</option>
      <option value="compat" ${currentFilter.sort === 'compat' ? 'selected' : ''}>بیشترین سازگاری</option>
      <option value="price-asc" ${currentFilter.sort === 'price-asc' ? 'selected' : ''}>ارزان‌ترین</option>
      <option value="price-desc" ${currentFilter.sort === 'price-desc' ? 'selected' : ''}>گران‌ترین</option>
      <option value="name" ${currentFilter.sort === 'name' ? 'selected' : ''}>نام</option>
    </select>
  `;
}

function applyFilter() {
  currentFilter.brand = document.getElementById('filter-brand')?.value || '';
  currentFilter.sort = document.getElementById('filter-sort')?.value || 'default';
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('products-list');
  const titleEl = document.getElementById('step-title');
  const descEl = document.getElementById('step-desc');
  if (!container) return;

  const step = BUILDER_STEPS[currentStep];
  const products = getFilteredProducts(step.key);

  titleEl.textContent = `انتخاب ${step.label}`;
  descEl.textContent = `قطعات ناسازگار غیرفعال شده‌اند. برای سازگارها امتیاز سازگاری نمایش داده می‌شود.`;

  // Count disabled
  const disabledCount = products.filter(p => !isCompatible(p, step.key)).length;
  const alertEl = document.getElementById('compat-alert');
  if (alertEl) {
    if (disabledCount > 0) {
      alertEl.style.display = 'block';
      alertEl.textContent = `${disabledCount} قطعه به دلیل ناسازگاری با انتخاب‌های قبلی غیرفعال شده‌اند.`;
    } else {
      alertEl.style.display = 'none';
    }
  }

  container.innerHTML = products.map(p => {
    const compatible = isCompatible(p, step.key);
    const selected = build[step.key]?.id === p.id;
    const reason = getIncompatibilityReason(p, step.key);
    const score = compatible ? getCompatScore(p, step.key) : 0;
    let cls = 'product-card';
    if (selected) cls += ' selected';
    if (!compatible) cls += ' disabled';

    const specsHtml = getSpecsHtml(p, step.key);

    return `
      <div class="${cls}" data-id="${p.id}" ${compatible ? `onclick="selectProduct('${step.key}', '${p.id}')"` : ''}>
        ${!compatible ? `<div class="compat-tooltip">${reason}</div>` : ''}
        <div class="product-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          ${p.stock > 0 ? `<span class="product-badge badge-stock">${p.stock > 5 ? 'موجود' : 'فقط ' + p.stock + ' عدد'}</span>` : '<span class="product-badge badge-sale">ناموجود</span>'}
          ${compatible && score > 0 ? scoreBadge(score) : ''}
        </div>
        <div class="product-body">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-specs">${specsHtml}</div>
          <div class="product-footer">
            <div class="product-price">${formatPrice(p.price)}</div>
            ${compatible ? `
              <button class="btn btn-sm ${selected ? 'btn-primary' : 'btn-outline'}" onclick="event.stopPropagation(); selectProduct('${step.key}', '${p.id}')">
                ${selected ? '✓ انتخاب شده' : 'انتخاب'}
              </button>
            ` : '<span class="text-muted" style="font-size:0.8rem">ناسازگار</span>'}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getSpecsHtml(p, category) {
  const specs = [];
  switch (category) {
    case 'case': specs.push(p.specs.type); specs.push(`GPU تا ${p.maxGpuLength}mm`); break;
    case 'motherboard': specs.push(p.socket); specs.push(p.chipset); specs.push(p.formFactor); specs.push(p.ramType); break;
    case 'cpu': specs.push(p.socket); specs.push(`${p.cores}C/${p.threads}T`); specs.push(p.boostClock + 'GHz'); break;
    case 'gpu': specs.push(p.vram); specs.push(`${p.length}mm`); specs.push(`${p.tdp}W`); break;
    case 'ram': specs.push(p.type); specs.push(`${p.capacity}GB`); specs.push(`${p.speed}MHz`); break;
    case 'storage': specs.push(p.type); specs.push(`${p.capacity}GB`); specs.push(p.form); break;
    case 'psu': specs.push(`${p.wattage}W`); specs.push(p.efficiency); break;
    case 'cooler': specs.push(p.type); if (p.type === 'Air') specs.push(`${p.height}mm`); else specs.push(`${p.radiator}mm`); break;
  }
  return specs.map(s => `<span class="product-spec">${s}</span>`).join('');
}

function renderSummary() {
  const list = document.getElementById('build-list');
  const totalEl = document.getElementById('build-total-price');
  const mobileTotal = document.getElementById('mobile-total');
  if (!list) return;

  let total = 0;
  list.innerHTML = BUILDER_STEPS.map(step => {
    const item = build[step.key];
    const filled = item !== null;
    if (filled) total += item.price;
    return `
      <div class="build-item ${filled ? 'filled' : ''}">
        <div class="build-item-icon">${step.icon}</div>
        <div class="build-item-info">
          <div class="build-item-label">${step.label}</div>
          <div class="build-item-name ${filled ? '' : 'empty'}">${filled ? item.name : 'انتخاب نشده'}</div>
        </div>
        <div class="build-item-price">${filled ? formatPrice(item.price) : '—'}</div>
      </div>`;
  }).join('');

  if (totalEl) totalEl.textContent = formatPrice(total);
  if (mobileTotal) mobileTotal.textContent = formatPrice(total);

  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) checkoutBtn.disabled = !Object.values(build).some(v => v !== null);

  // Benchmark
  const benchEl = document.getElementById('benchmark-box');
  if (benchEl) {
    const b = estimateBenchmark();
    if (b) {
      benchEl.style.display = 'block';
      benchEl.innerHTML = `
        <div class="bench-title">برآورد عملکرد گیمینگ</div>
        <div class="bench-score">${b.score}/100 — ${b.label}</div>
        <div class="bench-fps">
          <span>۱۰۸۰p: ~${b.fps1080} FPS</span>
          <span>۱۴۴۰p: ~${b.fps1440} FPS</span>
          <span>۴K: ~${b.fps4k} FPS</span>
        </div>
        <div class="bench-note">تقریبی بر اساس میانگین بازی‌های AAA</div>
      `;
    } else {
      benchEl.style.display = 'none';
    }
  }

  // AI Opinion
  const aiEl = document.getElementById('ai-opinion');
  if (aiEl) {
    aiEl.innerHTML = `
      <div class="ai-label">نظر هوش مصنوعی PCraft</div>
      <div class="ai-text">${getAIOpinion()}</div>
    `;
  }
}

function renderAll() {
  renderSteps();
  renderFilters();
  renderProducts();
  renderSummary();
}

/* ---------- Actions ---------- */
function selectProduct(category, id) {
  const products = PRODUCTS[category];
  const product = products.find(p => p.id === id);
  if (!product || !isCompatible(product, category)) return;
  if (build[category]?.id === id) build[category] = null;
  else build[category] = product;
  clearIncompatible();
  renderAll();
}

function clearIncompatible() {
  BUILDER_STEPS.forEach(step => {
    if (build[step.key] && !isCompatible(build[step.key], step.key)) {
      build[step.key] = null;
    }
  });
}

function goToStep(index) {
  if (index < 0 || index >= BUILDER_STEPS.length) return;
  currentStep = index;
  currentFilter = { brand: '', sort: 'default' };
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextStep() { if (currentStep < BUILDER_STEPS.length - 1) goToStep(currentStep + 1); }
function prevStep() { if (currentStep > 0) goToStep(currentStep - 1); }

function clearBuild() {
  Object.keys(build).forEach(k => build[k] = null);
  currentStep = 0;
  window.location.hash = '';
  renderAll();
}

function addBuildToCart() {
  const items = Object.values(build).filter(Boolean);
  if (items.length === 0) return;
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  items.forEach(item => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) existing.qty += 1;
    else cart.push({ ...item, qty: 1 });
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  if (typeof updateCartBadge === 'function') updateCartBadge();
  alert('قطعات سیستم به سبد خرید اضافه شد!');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('builder-steps')) {
    loadFromHash();
    renderAll();
  }
});
