/* ============================================================
   Common Functions - Header, Cart, Homepage
   ============================================================ */

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(product, category) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existing = cart.find(c => c.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1, category });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(c => c.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  if (typeof renderCart === 'function') renderCart();
}

function changeQty(id, delta) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  if (typeof renderCart === 'function') renderCart();
}

/* ---------- Homepage Featured Products ---------- */

function renderFeatured() {
  const container = document.getElementById('featured-products');
  if (!container) return;

  // Mix of popular products
  const featured = [
    PRODUCTS.gpu[0],
    PRODUCTS.cpu[0],
    PRODUCTS.motherboard[0],
    PRODUCTS.ram[0],
    PRODUCTS.case[0],
    PRODUCTS.storage[0],
    PRODUCTS.psu[0],
    PRODUCTS.cooler[1]
  ];

  container.innerHTML = featured.map(p => {
    const cat = Object.keys(PRODUCTS).find(k => PRODUCTS[k].some(x => x.id === p.id));
    return `
      <div class="product-card" onclick="location.href='product.html?id=${p.id}&cat=${cat}'">
        <div class="product-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="product-badge badge-new">پرفروش</span>
        </div>
        <div class="product-body">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-footer">
            <div class="product-price">${formatPrice(p.price)}</div>
            <button class="btn btn-sm btn-outline" onclick="event.stopPropagation(); addToCart(${JSON.stringify(p).replace(/"/g, '&quot;')}, '${cat}'); this.textContent='✓ اضافه شد';">
              افزودن
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderCategories() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(c => `
    <a href="builder.html" class="category-card">
      <div class="category-icon">${c.icon}</div>
      <span>${c.name}</span>
    </a>
  `).join('');
}

/* ---------- Cart Page ---------- */

function renderCart() {
  const container = document.getElementById('cart-body');
  const summary = document.getElementById('cart-summary');
  if (!container) return;

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  if (cart.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 48px; color: var(--text-muted);">
          سبد خرید شما خالی است.
          <br><br>
          <a href="builder.html" class="btn btn-primary">شروع سیستم‌ساز</a>
        </td>
      </tr>
    `;
    if (summary) summary.style.display = 'none';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const lineTotal = item.price * item.qty;
    total += lineTotal;
    return `
      <tr>
        <td>
          <div class="cart-product">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <div class="cart-product-name">${item.name}</div>
              <div class="cart-product-brand">${item.brand}</div>
            </div>
          </div>
        </td>
        <td>${formatPrice(item.price)}</td>
        <td>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
          </div>
        </td>
        <td>${formatPrice(lineTotal)}</td>
        <td>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="حذف">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M8 6V4h8v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/>
            </svg>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (summary) {
    summary.style.display = 'block';
    document.getElementById('cart-subtotal').textContent = formatPrice(total);
    document.getElementById('cart-total').textContent = formatPrice(total);
  }
}

/* ---------- Product Page ---------- */

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const cat = params.get('cat');
  if (!id || !cat || !PRODUCTS[cat]) return;

  const product = PRODUCTS[cat].find(p => p.id === id);
  if (!product) return;

  document.getElementById('prod-name').textContent = product.name;
  document.getElementById('prod-brand').textContent = product.brand;
  document.getElementById('prod-price').textContent = formatPrice(product.price);
  document.getElementById('prod-img').src = product.image;
  document.getElementById('prod-img').alt = product.name;

  // Specs table
  const specsEl = document.getElementById('prod-specs');
  let rows = '';
  const skip = ['id', 'name', 'brand', 'price', 'image', 'stock', 'specs'];
  Object.entries(product).forEach(([key, val]) => {
    if (skip.includes(key) || typeof val === 'object') return;
    rows += `<tr><td>${key}</td><td>${val}</td></tr>`;
  });
  if (product.specs) {
    Object.entries(product.specs).forEach(([key, val]) => {
      rows += `<tr><td>${key}</td><td>${val}</td></tr>`;
    });
  }
  specsEl.innerHTML = rows;

  // Compatible products (for CPU show motherboards)
  const compatEl = document.getElementById('compatible-products');
  if (compatEl && cat === 'cpu') {
    const compatible = PRODUCTS.motherboard.filter(m => m.socket === product.socket);
    compatEl.innerHTML = `
      <h3 class="mb-3">مادربردهای سازگار</h3>
      <div class="products-grid">
        ${compatible.map(m => `
          <div class="product-card" onclick="location.href='product.html?id=${m.id}&cat=motherboard'">
            <div class="product-img"><img src="${m.image}" alt="${m.name}"></div>
            <div class="product-body">
              <div class="product-brand">${m.brand}</div>
              <div class="product-name">${m.name}</div>
              <div class="product-footer">
                <div class="product-price">${formatPrice(m.price)}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

/* ---------- Init ---------- */

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCategories();
  renderFeatured();
  renderCart();
  renderProductPage();
});