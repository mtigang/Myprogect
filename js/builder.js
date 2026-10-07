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
  const step = BUILDER_STEPS[currentStep];
  const stepKey = step ? step.key : null;
  const selected = stepKey ? build[stepKey] : null;
  const total = parts.reduce((s, p) => s + p.price, 0);
  const lines = [];

  // --- Empty build ---
  if (parts.length === 0) {
    return `سلام! من دستیار هوشمند PCraft هستم و قدم‌به‌قدم همراهت می‌مونم.

الان هیچ قطعه‌ای انتخاب نشده. پیشنهاد می‌کنم از <strong>کیس</strong> شروع کنی؛ چون اندازه و محدودیت‌های کیس (طول GPU، ارتفاع کولر، فرم‌فکتور مادربرد) روی همه انتخاب‌های بعدی تأثیر می‌ذاره و از انتخاب اشتباه جلوگیریه.

بعد از انتخاب هر قطعه، اینجا برات توضیح می‌دم چه تأثیری داره و مرحله بعد چی باید حواست باشه.`;
  }

  // --- Step-specific commentary when something is selected on current step ---
  if (selected && stepKey === 'case') {
    lines.push(`کیس <strong>${selected.name}</strong> انتخاب شد.`);
    lines.push(`این کیس از فرم‌فکتورهای ${selected.formFactor.join('، ')} پشتیبانی می‌کنه، حداکثر طول کارت گرافیک ${selected.maxGpuLength}mm و حداکثر ارتفاع کولر بادی ${selected.maxCoolerHeight}mm است.`);
    if (selected.formFactor.includes('Mini-ITX') && selected.formFactor.length === 1) {
      lines.push(`چون کیس Mini-ITX است، فقط مادربردهای Mini-ITX قابل انتخاب خواهند بود و فضای داخلی محدودتره — برای سیستم جمع‌وجور عالیه، ولی ارتقای آینده سخت‌تر می‌شه.`);
    } else if (selected.maxGpuLength < 320) {
      lines.push(`طول GPU محدود است؛ کارت‌های خیلی بلند (مثل بعضی مدل‌های رده‌بالا) ممکنه جا نشوند. در مرحله کارت گرافیک این محدودیت اعمال می‌شه.`);
    } else {
      lines.push(`فضای داخلی مناسبیه و دستت برای انتخاب مادربرد ATX و کارت گرافیک‌های بزرگ بازه.`);
    }
    lines.push(`مرحله بعد: <strong>مادربرد</strong> — فقط مدل‌هایی که فرم‌فکتورشون با این کیس جور باشه فعال می‌مونن.`);
  }

  if (selected && stepKey === 'motherboard') {
    lines.push(`مادربرد <strong>${selected.name}</strong> (${selected.socket} / ${selected.chipset} / ${selected.ramType}) انتخاب شد.`);
    lines.push(`از این لحظه فقط پردازنده‌های سوکت <strong>${selected.socket}</strong> و رم‌های <strong>${selected.ramType}</strong> قابل انتخاب‌اند. بقیه کم‌رنگ و غیرفعال می‌شن.`);
    if (selected.chipset.includes('B650') || selected.chipset.includes('B550') || selected.chipset.includes('B760')) {
      lines.push(`چیست ${selected.chipset} برای گیمینگ و استفاده روزمره کاملاً کافیه و معمولاً ارزش خرید بهتری نسبت به سری‌های رده‌بالا داره.`);
    } else if (selected.chipset.includes('X670') || selected.chipset.includes('Z790')) {
      lines.push(`چیست رده‌بالا انتخاب کردی؛ قابلیت اورکلاک، VRM قوی‌تر و پورت‌های بیشتر داری. اگر بودجه محدودی، شاید نیازی به این سطح نباشه مگر برای اورکلاک یا چند SSD همزمان.`);
    }
    if (selected.m2Slots >= 3) {
      lines.push(`تعداد اسلات M.2 خوبه (${selected.m2Slots} عدد) — برای چند SSD پرسرعت فضای کافی داری.`);
    }
    lines.push(`مرحله بعد: <strong>پردازنده</strong> — فقط CPUهای سازگار با سوکت ${selected.socket} نشون داده می‌شن و به هر کدوم امتیاز سازگاری می‌دم.`);
  }

  if (selected && stepKey === 'cpu') {
    lines.push(`پردازنده <strong>${selected.name}</strong> (${selected.cores} هسته / ${selected.threads} رشته، امتیاز گیمینگ ${selected.gamingScore || '—'}) انتخاب شد.`);
    if (selected.gamingScore >= 95) {
      lines.push(`این یکی از بهترین گزینه‌های گیمینگ بازاره. کش بالا و معماری قوی یعنی در بازی‌های CPU-bound (مثل شبیه‌سازها و بعضی عناوین استراتژی) عملکرد عالی می‌گیری.`);
    } else if (selected.gamingScore >= 85) {
      lines.push(`برای گیمینگ ۱۰۸۰p و ۱۴۴۰p انتخاب خیلی خوبیه. تعادل قیمت و عملکردش مناسبه.`);
    } else if (selected.cores >= 12) {
      lines.push(`تعداد هسته بالاست — برای رندر، کامپایل، مجازی‌سازی و ادیت ویدیو عالی عمل می‌کنه؛ در گیمینگ خالص ممکنه مدل‌های گیمینگ‌محور کمی بهتر باشن.`);
    } else {
      lines.push(`گزینه اقتصادی و کارآمد برای کارهای روزمره و گیمینگ سبک تا متوسط.`);
    }
    if (build.motherboard) {
      lines.push(`با مادربرد ${build.motherboard.name} از نظر سوکت کاملاً سازگاره.`);
    }
    lines.push(`مرحله بعد: <strong>کارت گرافیک</strong> — سعی کن سطح GPU رو با قدرت CPU هماهنگ کنی تا گلوگاه ایجاد نشه.`);
  }

  if (selected && stepKey === 'gpu') {
    lines.push(`کارت گرافیک <strong>${selected.name}</strong> (${selected.vram}، توان ${selected.tdp}W، امتیاز ${selected.gamingScore || '—'}) انتخاب شد.`);
    if (build.case && selected.length > build.case.maxGpuLength - 10) {
      lines.push(`طول کارت نزدیک به سقف کیسه؛ قبل از خرید نهایی حتماً ابعاد را دوباره چک کن.`);
    }
    if (build.cpu) {
      const diff = (selected.gamingScore || 70) - (build.cpu.gamingScore || 70);
      if (diff > 15) {
        lines.push(`<strong>هشدار تعادل:</strong> GPU نسبت به CPU خیلی قوی‌تره. در بعضی بازی‌ها پردازنده ممکنه گلوگاه بشه و نذاره از تمام توان کارت استفاده کنی. ارتقای CPU یا انتخاب GPU متعادل‌تر را در نظر بگیر.`);
      } else if (diff < -15) {
        lines.push(`<strong>هشدار تعادل:</strong> پردازنده قوی‌تر از کارت گرافیکه. برای استفاده کامل از CPU، GPU قوی‌تری پیشنهاد می‌شه — وگرنه در رزولوشن بالا کارت محدودت می‌کنه.`);
      } else {
        lines.push(`تعادل CPU و GPU خوبه؛ هیچ‌کدام به‌طور واضح گلوگاه دیگری نمی‌شه و پولت هدر نمی‌ره.`);
      }
    }
    lines.push(`حداقل پاور پیشنهادی برای این کارت حدود <strong>${selected.recommendedPsu}W</strong> است. در مرحله پاور این عدد را جدی بگیر و حاشیه ایمنی (مثلاً +۱۵۰W) در نظر بگیر.`);
  }

  if (selected && stepKey === 'ram') {
    lines.push(`رم <strong>${selected.name}</strong> (${selected.capacity}GB ${selected.type}-${selected.speed}) انتخاب شد.`);
    if (build.motherboard && selected.type !== build.motherboard.ramType) {
      lines.push(`نوع رم با مادربرد ناسازگار است — این انتخاب نباید فعال باشد. مادربرد را دوباره بررسی کن.`);
    } else {
      if (selected.capacity < 16) {
        lines.push(`ظرفیت کمتر از ۱۶ گیگ برای گیمینگ و ویندوز امروزی کمه. حداقل ۳۲ گیگ پیشنهاد می‌شه.`);
      } else if (selected.capacity >= 64) {
        lines.push(`ظرفیت بالا برای ادیت سنگین، ماشین مجازی و پروژه‌های بزرگ عالیه.`);
      } else {
        lines.push(`۳۲ گیگ برای اکثر کاربران گیمینگ و کار روزمره نقطه بهینه است.`);
      }
      if (selected.type === 'DDR5' && selected.speed >= 6000) {
        lines.push(`سرعت ${selected.speed}MHz روی پلتفرم‌های جدید (مخصوصاً AMD) عملکرد خوبی می‌ده.`);
      }
    }
    lines.push(`مرحله بعد: <strong>حافظه ذخیره‌سازی</strong> — یک NVMe پرسرعت برای سیستم و بازی‌ها انتخاب کن.`);
  }

  if (selected && stepKey === 'storage') {
    lines.push(`حافظه <strong>${selected.name}</strong> (${selected.capacity}GB، ${selected.type}) انتخاب شد.`);
    if (selected.type === 'NVMe') {
      lines.push(`NVMe سرعت بوت و لود بازی را نسبت به SATA و HDD چند برابر بالاتر می‌بره. برای درایو اصلی سیستم بهترین انتخاب است.`);
    } else if (selected.type === 'HDD') {
      lines.push(`HDD برای آرشیو و فایل‌های حجیم خوبه، ولی برای ویندوز و بازی‌های اصلی بهتر است یک SSD هم داشته باشی.`);
    } else {
      lines.push(`SATA SSD از HDD سریع‌تره ولی از NVMe کندتر. برای بودجه محدود هنوز قابل قبول است.`);
    }
    if (selected.capacity < 1000) {
      lines.push(`ظرفیت کمتر از ۱ ترابایت برای بازی‌های امروزی زود پر می‌شه. اگر فقط یک درایو می‌خری، حداقل ۱–۲ ترابایت در نظر بگیر.`);
    }
  }

  if (selected && stepKey === 'psu') {
    lines.push(`پاور <strong>${selected.name}</strong> (${selected.wattage}W، ${selected.efficiency}) انتخاب شد.`);
    if (build.gpu) {
      const head = selected.wattage - build.gpu.recommendedPsu;
      if (head < 0) {
        lines.push(`<strong>خطر:</strong> توان پاور از حداقل پیشنهادی کارت گرافیک کمتر است. سیستم ممکن است تحت بار ناپایدار شود یا اصلاً روشن نشود. پاور قوی‌تری انتخاب کن.`);
      } else if (head < 100) {
        lines.push(`حاشیه ایمنی کمه. بهتر است حداقل ۱۰۰–۱۵۰ وات بالاتر از حداقل پیشنهادی GPU بگیری تا برای ارتقای آینده و پایداری بهتر آماده باشی.`);
      } else {
        lines.push(`حاشیه توان مناسب است (+${head}W نسبت به حداقل GPU). پاور با کیفیت و گواهی ۸۰+ عمر قطعات را هم بهتر حفظ می‌کند.`);
      }
    } else {
      lines.push(`هنوز GPU انتخاب نشده؛ بعد از انتخاب کارت گرافیک دوباره توان پاور را چک کن.`);
    }
  }

  if (selected && stepKey === 'cooler') {
    lines.push(`خنک‌کننده <strong>${selected.name}</strong> (${selected.type}) انتخاب شد.`);
    if (build.cpu && selected.tdpSupport < build.cpu.tdp) {
      lines.push(`<strong>هشدار:</strong> توان دفع حرارت کولر از TDP پردازنده کمتر است. ممکن است در بار سنگین دمای بالا و افت فرکانس (تراتلینگ) رخ دهد.`);
    } else if (build.cpu) {
      lines.push(`ظرفیت خنک‌کنندگی برای TDP پردازنده کافی به نظر می‌رسد.`);
    }
    if (selected.type === 'Air' && build.case && selected.height > build.case.maxCoolerHeight) {
      lines.push(`ارتفاع کولر از سقف کیس بیشتر است — این ترکیب از نظر فیزیکی جا نمی‌شود.`);
    }
    if (selected.type === 'AIO') {
      lines.push(`AIO ظاهر تمیزتری می‌دهد و برای پردازنده‌های پرمصرف مناسب‌تر است، ولی نگهداری و احتمال نشتی را هم در نظر بگیر.`);
    }
  }

  // --- If current step has nothing selected yet, guide the user ---
  if (!selected && parts.length > 0) {
    const label = step ? step.label : 'این مرحله';
    lines.push(`الان در مرحله <strong>${label}</strong> هستی و هنوز چیزی از این دسته انتخاب نشده.`);
    if (stepKey === 'cpu' && build.motherboard) {
      lines.push(`فقط پردازنده‌های سوکت ${build.motherboard.socket} فعال‌اند. بقیه به خاطر ناسازگاری با مادربرد غیرفعال شده‌اند.`);
    } else if (stepKey === 'ram' && build.motherboard) {
      lines.push(`فقط رم‌های ${build.motherboard.ramType} با این مادربرد سازگارند.`);
    } else if (stepKey === 'gpu' && build.case) {
      lines.push(`کارت‌هایی که طولشان از ${build.case.maxGpuLength}mm بیشتر باشد در کیس جا نمی‌شوند و غیرفعال‌اند.`);
    } else if (stepKey === 'psu' && build.gpu) {
      lines.push(`حداقل توان پیشنهادی با توجه به GPU فعلی حدود ${build.gpu.recommendedPsu}W است. پاور ضعیف‌تر را انتخاب نکن.`);
    } else {
      lines.push(`از لیست زیر یک قطعه سازگار انتخاب کن. قطعات ناسازگار کم‌رنگ و غیرفعال‌اند و با نگه داشتن موس دلیلش را می‌بینی.`);
    }
  }

  // --- Global balance / summary when multiple core parts exist ---
  if (build.cpu && build.gpu) {
    const diff = (build.gpu.gamingScore || 70) - (build.cpu.gamingScore || 70);
    if (diff > 15 && stepKey !== 'gpu' && stepKey !== 'cpu') {
      lines.push(`یادآوری تعادل: GPU فعلی قوی‌تر از CPU است؛ در برخی بازی‌ها ممکن است پردازنده محدودت کند.`);
    } else if (diff < -15 && stepKey !== 'gpu' && stepKey !== 'cpu') {
      lines.push(`یادآوری تعادل: CPU قوی‌تر از GPU است؛ برای گیمینگ سنگین، کارت گرافیک نقطه ضعف فعلی سیستم است.`);
    }
  }

  if (build.gpu && build.psu && build.psu.wattage < build.gpu.recommendedPsu) {
    lines.push(`پاور فعلی از حداقل پیشنهادی GPU ضعیف‌تر است — قبل از نهایی کردن بیلد حتماً این را اصلاح کن.`);
  }

  // --- Overall progress ---
  const core = ['motherboard', 'cpu', 'gpu'].filter(k => build[k]).length;
  if (parts.length >= 1 && parts.length < 6) {
    lines.push(`پیشرفت بیلد: ${parts.length} از ۸ قطعه. هنوز ${8 - parts.length} قطعه باقی مانده.`);
  }
  if (parts.length >= 7) {
    lines.push(`تقریباً کامل شد. مجموع تقریبی: <strong>${formatPrice(total)}</strong>. دکمه اشتراک‌گذاری را بزن تا لینک بیلد را برای دوستت بفرستی، یا به سبد خرید اضافه کن.`);
  }

  return lines.join('<br><br>');
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
      <div class="ai-label">دستیار هوشمند PCraft</div>
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
