/* ===========================
   NOCTA WEAR — APP.JS
   =========================== */

'use strict';

// ── State ───────────────────────────────────────
const state = {
  lang: 'fr',
  cart: [],
  wishlist: [],
  data: null,
  currentPackage: null,
  currentSize: null,
  currentQty: 1,
  checkoutStep: 1,
  checkoutData: {}
};

// ── i18n strings ────────────────────────────────
const i18n = {
  fr: {
    nav_home: 'Accueil',
    nav_packages: 'Packs',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    hero_eyebrow: 'NOCTA WEAR — Collection 2025',
    hero_title_1: 'L\'essentiel',
    hero_title_2: 'minimal',
    hero_title_3: 'pour l\'homme moderne.',
    hero_sub: 'Comfort. Style. Confidence.',
    hero_cta_1: 'Découvrir les packs',
    hero_cta_2: 'Commander via WhatsApp',
    packages_eyebrow: 'Nos Collections',
    packages_title: 'Choisissez votre',
    packages_title_em: 'Pack Signature',
    choose_package: 'Choisir ce pack',
    testimonials_eyebrow: 'Avis Clients',
    testimonials_title: 'Ils nous font',
    testimonials_title_em: 'confiance',
    faq_eyebrow: 'Questions Fréquentes',
    faq_title: 'Tout ce que vous',
    faq_title_em: 'devez savoir',
    about_eyebrow: 'Notre Promesse',
    about_title: 'Le luxe à votre',
    about_title_em: 'portée',
    insta_eyebrow: 'Rejoignez la communauté',
    insta_sub: 'Suivez notre actualité sur Instagram',
    insta_btn: 'Suivre @nocta_wear',
    footer_nav: 'Navigation',
    footer_support: 'Support',
    footer_contact: 'Contact',
    footer_copy: '© 2025 NOCTA WEAR. Tous droits réservés.',
    footer_tagline: 'COMFORT. STYLE. CONFIDENCE.',
    cart_title: 'Votre Panier',
    cart_empty: 'Votre panier est vide',
    cart_total: 'Total',
    cart_checkout: 'Commander',
    cart_whatsapp: 'Commander via WhatsApp',
    checkout_title: 'Finaliser la commande',
    step1_title: 'Informations',
    step2_title: 'Livraison',
    step3_title: 'Confirmation',
    fullname: 'Nom complet',
    phone: 'Numéro de téléphone',
    city: 'Ville',
    address: 'Adresse complète',
    notes: 'Notes (optionnel)',
    next: 'Suivant',
    prev: 'Retour',
    confirm_order: 'Confirmer la commande',
    order_confirmed: 'Commande confirmée !',
    order_text: 'Merci pour votre commande. Notre équipe vous contactera sous 24h pour confirmer la livraison.',
    send_whatsapp: 'Valider via WhatsApp',
    included: 'Articles inclus',
    select_size: 'Taille',
    quantity: 'Quantité',
    add_to_cart: 'Ajouter au panier',
    buy_now: 'Commander maintenant',
    order_via_wa: 'Commander via WhatsApp',
    added_to_cart: 'Ajouté au panier !',
    removed_from_cart: 'Retiré du panier',
    added_wishlist: 'Ajouté aux favoris',
    removed_wishlist: 'Retiré des favoris',
    select_size_warn: 'Veuillez sélectionner une taille',
    free_delivery: 'Livraison Gratuite',
    free_delivery_text: 'Partout au Maroc',
    cash_on_delivery: 'Paiement à la livraison',
    cash_on_delivery_text: 'Aucun paiement en avance',
    premium_quality: 'Qualité Premium',
    premium_quality_text: 'Sélection rigoureuse',
    easy_exchange: 'Échange Facile',
    easy_exchange_text: 'Sous 7 jours',
    search_placeholder: 'Rechercher un pack...',
    searching: 'Tapez pour rechercher',
    summary_package: 'Pack',
    summary_size: 'Taille',
    summary_qty: 'Quantité',
    summary_total: 'Total',
    summary_delivery: 'Livraison',
    summary_delivery_val: 'Gratuite',
    footer_links: ['Accueil', 'Packs', 'À propos', 'FAQ', 'Contact'],
    footer_support_links: ['Livraison', 'Retours', 'Tailles', 'WhatsApp'],
    about_description: 'NOCTA WEAR est votre partenaire de style au quotidien. Nous sélectionnons avec soin chaque article pour vous offrir le meilleur rapport qualité-prix, livré directement chez vous partout au Maroc.'
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_packages: 'الباكات',
    nav_faq: 'الأسئلة',
    nav_contact: 'تواصل',
    hero_eyebrow: 'NOCTA WEAR — مجموعة 2025',
    hero_title_1: 'الأساسيات',
    hero_title_2: 'المثالية',
    hero_title_3: 'للرجل العصري.',
    hero_sub: 'Comfort. Style. Confidence.',
    hero_cta_1: 'اكتشف الباكات',
    hero_cta_2: 'اطلب عبر واتساب',
    packages_eyebrow: 'مجموعاتنا',
    packages_title: 'اختر',
    packages_title_em: 'باكك المميز',
    choose_package: 'اختر هذا الباك',
    testimonials_eyebrow: 'آراء العملاء',
    testimonials_title: 'يثقون',
    testimonials_title_em: 'بنا',
    faq_eyebrow: 'الأسئلة الشائعة',
    faq_title: 'كل ما تريد',
    faq_title_em: 'معرفته',
    about_eyebrow: 'وعدنا لك',
    about_title: 'الفخامة في',
    about_title_em: 'متناول يدك',
    insta_eyebrow: 'انضم إلى مجتمعنا',
    insta_sub: 'تابع أخبارنا على إنستغرام',
    insta_btn: 'متابعة @nocta_wear',
    footer_nav: 'التنقل',
    footer_support: 'الدعم',
    footer_contact: 'تواصل معنا',
    footer_copy: '© 2025 NOCTA WEAR. جميع الحقوق محفوظة.',
    footer_tagline: 'COMFORT. STYLE. CONFIDENCE.',
    cart_title: 'سلة التسوق',
    cart_empty: 'سلة التسوق فارغة',
    cart_total: 'المجموع',
    cart_checkout: 'إتمام الطلب',
    cart_whatsapp: 'الطلب عبر واتساب',
    checkout_title: 'إتمام الطلب',
    step1_title: 'المعلومات',
    step2_title: 'التوصيل',
    step3_title: 'التأكيد',
    fullname: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    city: 'المدينة',
    address: 'العنوان الكامل',
    notes: 'ملاحظات (اختياري)',
    next: 'التالي',
    prev: 'رجوع',
    confirm_order: 'تأكيد الطلب',
    order_confirmed: 'تم تأكيد الطلبية !',
    order_text: 'شكراً لطلبك. سيتواصل معك فريقنا خلال 24 ساعة لتأكيد التوصيل.',
    send_whatsapp: 'تأكيد عبر واتساب',
    included: 'المحتويات',
    select_size: 'المقاس',
    quantity: 'الكمية',
    add_to_cart: 'إضافة للسلة',
    buy_now: 'اطلب الآن',
    order_via_wa: 'اطلب عبر واتساب',
    added_to_cart: 'تمت الإضافة !',
    removed_from_cart: 'تمت الإزالة',
    added_wishlist: 'أضيف للمفضلة',
    removed_wishlist: 'أزيل من المفضلة',
    select_size_warn: 'يرجى اختيار المقاس',
    free_delivery: 'توصيل مجاني',
    free_delivery_text: 'في جميع أنحاء المغرب',
    cash_on_delivery: 'الدفع عند الاستلام',
    cash_on_delivery_text: 'لا دفع مسبق',
    premium_quality: 'جودة بريميوم',
    premium_quality_text: 'اختيار دقيق ومتأنٍّ',
    easy_exchange: 'استبدال سهل',
    easy_exchange_text: 'خلال 7 أيام',
    search_placeholder: 'ابحث عن باك...',
    searching: 'اكتب للبحث',
    summary_package: 'الباك',
    summary_size: 'المقاس',
    summary_qty: 'الكمية',
    summary_total: 'المجموع',
    summary_delivery: 'التوصيل',
    summary_delivery_val: 'مجاني',
    footer_links: ['الرئيسية', 'الباكات', 'من نحن', 'الأسئلة', 'تواصل'],
    footer_support_links: ['التوصيل', 'الإرجاع', 'المقاسات', 'واتساب'],
    about_description: 'NOCTA WEAR هو شريكك في الأناقة اليومية. نختار بعناية كل قطعة لنقدم لك أفضل جودة بأفضل سعر، مع توصيل مباشر إلى باب منزلك في جميع أنحاء المغرب.'
  }
};

const t = (key) => (i18n[state.lang] && i18n[state.lang][key]) || key;

// ── Init ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  // Loading screen
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 1800);

  // Fetch data
  try {
    const res = await fetch('data.json');
    state.data = await res.json();
  } catch {
    console.warn('Using inline fallback data');
    state.data = window.FALLBACK_DATA || { packages: [], faq: [], testimonials: [], brand: {} };
  }

  renderAll();
  bindEvents();
  initScrollReveal();
  updateCartBadge();

  // Deep link: open pack from URL hash (e.g. #pack-essential)
  const hash = window.location.hash;
  if (hash.startsWith('#pack-')) {
    const packId = hash.replace('#pack-', '');
    setTimeout(() => {
      const pkg = state.data.packages.find(p => p.id === packId);
      if (pkg) {
        document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => openPackageModal(packId), 400);
      }
    }, 2000); // wait for loading screen
  }
});

// ── Render Everything ────────────────────────────
function renderAll() {
  renderNavLinks();
  renderHero();
  renderPackages();
  renderTestimonials();
  renderFAQ();
  renderAbout();
  renderInstagram();
  renderFooter();
  applyLang();
}

function applyLang() {
  const isRTL = state.lang === 'ar';
  document.body.classList.toggle('rtl', isRTL);
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = state.lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === state.lang);
  });
}

// ── Navbar ───────────────────────────────────────
function renderNavLinks() {
  const links = document.getElementById('nav-links');
  if (!links) return;
  links.innerHTML = `
    <a href="#hero">${t('nav_home')}</a>
    <a href="#packages">${t('nav_packages')}</a>
    <a href="#faq">${t('nav_faq')}</a>
    <a href="#contact">${t('nav_contact')}</a>
  `;
  const mobile = document.getElementById('mobile-menu-links');
  if (mobile) mobile.innerHTML = links.innerHTML;
}

// ── Hero ─────────────────────────────────────────
function renderHero() {
  const h = document.getElementById('hero-content');
  if (!h) return;
  h.innerHTML = `
    <p class="hero-eyebrow">${t('hero_eyebrow')}</p>
    <img src="logo.png" alt="NOCTA WEAR" class="hero-logo-img" onerror="this.style.display='none'">
    <h1 class="hero-title">
      ${t('hero_title_1')} <em>${t('hero_title_2')}</em><br>${t('hero_title_3')}
    </h1>
    <p class="hero-sub">${t('hero_sub')}</p>
    <div class="hero-cta">
      <a href="#packages" class="btn-primary">
        <i class="fas fa-gem"></i> ${t('hero_cta_1')}
      </a>
      <a href="https://wa.me/${state.data.brand.whatsapp}" target="_blank" class="btn-outline">
        <i class="fab fa-whatsapp"></i> ${t('hero_cta_2')}
      </a>
    </div>
  `;
}

// ── Packages ─────────────────────────────────────
function renderPackages() {
  const grid = document.getElementById('packages-grid');
  if (!grid || !state.data) return;
  const header = document.getElementById('packages-header');
  if (header) header.innerHTML = `
    <p class="section-eyebrow">${t('packages_eyebrow')}</p>
    <h2 class="section-title">${t('packages_title')} <em>${t('packages_title_em')}</em></h2>
    <div class="section-line"></div>
  `;
  grid.innerHTML = state.data.packages.map((pkg, i) => `
    <div class="package-card reveal reveal-delay-${(i % 4) + 1}" data-id="${pkg.id}" onclick="openPackageModal('${pkg.id}')">
      <div class="card-image-wrap">
        <img src="${pkg.image}" alt="${pkg[`name_${state.lang}`]}" loading="lazy">
        <div class="card-badge">${pkg[`badge_${state.lang}`]}</div>
        <div class="card-overlay"></div>
      </div>
      <div class="card-body">
        <h3 class="card-name">${pkg[`name_${state.lang}`]}</h3>
        <p class="card-desc">${pkg[`description_${state.lang}`]}</p>
        <div class="card-items">
          ${(pkg[`items_${state.lang}`] || []).slice(0, 4).map(item => `<div class="card-item">${item}</div>`).join('')}
          ${(pkg[`items_${state.lang}`] || []).length > 4 ? `<div class="card-item" style="color:var(--gold)">+${pkg[`items_${state.lang}`].length - 4} ${state.lang === 'ar' ? 'عناصر أخرى' : 'autres articles'}</div>` : ''}
        </div>
        <div class="card-footer">
          <div class="card-price">${pkg.price}<span>${pkg.currency}</span></div>
          <button class="card-btn" onclick="event.stopPropagation();openPackageModal('${pkg.id}')">${t('choose_package')}</button>
        </div>
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

// ── Package Modal ────────────────────────────────
function openPackageModal(id) {
  const pkg = state.data.packages.find(p => p.id === id);
  if (!pkg) return;
  state.currentPackage = pkg;
  state.currentSize = null;
  state.currentQty = 1;

  // Update URL hash with package id for deep linking
  history.pushState(null, '', '#pack-' + id);

  const modal = document.getElementById('package-modal');
  const isInWishlist = state.wishlist.includes(id);

  modal.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <img src="${pkg.image}" alt="${pkg[`name_${state.lang}`]}">
        <button class="modal-close" onclick="closeModal('package-modal')"><i class="fas fa-times"></i></button>
        <div class="modal-header-overlay">
          <div class="modal-badge">${pkg[`badge_${state.lang}`]}</div>
          <h2 class="modal-title">${pkg[`name_${state.lang}`]}</h2>
        </div>
      </div>
      <div class="modal-body">
        <p class="modal-desc">${pkg[`description_${state.lang}`]}</p>
        <p class="modal-items-title">${t('included')}</p>
        <div class="modal-items-grid">
          ${(pkg[`items_${state.lang}`] || []).map(item => `
            <div class="modal-item"><i class="fas fa-check"></i>${item}</div>
          `).join('')}
        </div>
        <div class="modal-controls">
          <div class="control-group">
            <label>${t('select_size')}</label>
            <div class="size-selector">
              ${(['L','XL','XXL']).map(s => `
                <button class="size-btn" data-size="${s}" onclick="selectSize('${s}',this)">${s}</button>
              `).join('')}
            </div>
          </div>
          <div class="control-group">
            <label>${t('quantity')}</label>
            <div class="qty-selector">
              <button class="qty-btn" onclick="changeQty(-1)">−</button>
              <div class="qty-display" id="qty-display">1</div>
              <button class="qty-btn" onclick="changeQty(1)">+</button>
            </div>
          </div>
        </div>
        <div class="modal-price-row">
          <div>
            <div style="font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--white-faint);margin-bottom:0.3rem">Total</div>
            <div class="modal-price" id="modal-price">${pkg.price} <small>${pkg.currency}</small></div>
          </div>
          <div style="font-size:0.7rem;color:var(--white-faint);text-align:${state.lang === 'ar' ? 'left' : 'right'}">
            <div><i class="fas fa-truck" style="color:var(--gold);margin-right:0.4rem"></i>${state.data.brand.delivery || 'Livraison Maroc'}</div>
            <div style="margin-top:0.4rem"><i class="fas fa-money-bill-wave" style="color:var(--gold);margin-right:0.4rem"></i>${state.data.brand.payment || 'Cash on delivery'}</div>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn-primary" onclick="addToCart()">
            <i class="fas fa-shopping-bag"></i> ${t('add_to_cart')}
          </button>
          <button class="btn-whatsapp" id="modal-whatsapp-btn" onclick="whatsappOrderWithInfo()" style="display:none">
            <i class="fab fa-whatsapp"></i> ${t('order_via_wa')}
          </button>
          <button class="btn-wishlist ${isInWishlist ? 'active' : ''}" id="wishlist-btn" onclick="toggleWishlist('${id}')">
            <i class="fa${isInWishlist ? 's' : 'r'} fa-heart"></i>
          </button>
        </div>
        <div id="modal-info-form" class="modal-info-form">
          <p class="modal-info-form-title"><i class="fas fa-user"></i> ${t('fullname') + ' & ' + t('phone')}</p>
          <div class="form-group"><input type="text" class="form-input" id="modal-f-name" placeholder="${t('fullname')}"></div>
          <div class="form-group"><input type="tel" class="form-input" id="modal-f-phone" placeholder="+212..."></div>
          <div class="form-group"><input type="text" class="form-input" id="modal-f-city" placeholder="${t('city')}"></div>
          <button class="btn-whatsapp" style="width:100%;margin-top:0.5rem" onclick="submitModalWhatsapp()">
            <i class="fab fa-whatsapp"></i> ${t('order_via_wa')}
          </button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('package-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectSize(size, btn) {
  state.currentSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const waBtn = document.getElementById('modal-whatsapp-btn');
  if (waBtn) waBtn.style.display = '';
}

function changeQty(delta) {
  state.currentQty = Math.max(1, Math.min(10, state.currentQty + delta));
  const display = document.getElementById('qty-display');
  if (display) display.textContent = state.currentQty;
  const priceEl = document.getElementById('modal-price');
  if (priceEl && state.currentPackage) {
    priceEl.innerHTML = `${state.currentPackage.price * state.currentQty} <small>${state.currentPackage.currency}</small>`;
  }
}

function addToCart() {
  if (!state.currentSize) { showToast(t('select_size_warn'), 'exclamation-circle'); return; }
  const pkg = state.currentPackage;
  const item = {
    id: pkg.id + '_' + state.currentSize + '_' + Date.now(),
    packageId: pkg.id,
    name: pkg[`name_${state.lang}`],
    image: pkg.image,
    size: state.currentSize,
    qty: state.currentQty,
    price: pkg.price,
    currency: pkg.currency,
    total: pkg.price * state.currentQty
  };
  state.cart.push(item);
  updateCartBadge();
  showToast(t('added_to_cart'), 'check-circle');
  closeModal('package-modal');
  setTimeout(() => openCart(), 300);
}

function whatsappOrderWithInfo() {
  if (!state.currentSize) { showToast(t('select_size_warn'), 'exclamation-circle'); return; }
  const form = document.getElementById('modal-info-form');
  if (form) {
    form.classList.toggle('visible');
    if (form.classList.contains('visible')) form.querySelector('input')?.focus();
  }
}

function submitModalWhatsapp() {
  if (!state.currentSize) { showToast(t('select_size_warn'), 'exclamation-circle'); return; }
  const name = document.getElementById('modal-f-name')?.value.trim();
  const phone = document.getElementById('modal-f-phone')?.value.trim();
  const city = document.getElementById('modal-f-city')?.value.trim();
  if (!name || !phone || !city) { showToast('Veuillez remplir tous les champs', 'exclamation'); return; }
  const pkg = state.currentPackage;
  const lines = [
    `🛍 *NOCTA WEAR — Nouvelle Commande*`,
    ``,
    `👤 *Client:* ${name}`,
    `📞 *Téléphone:* ${phone}`,
    `🏙 *Ville:* ${city}`,
    ``,
    `📦 Pack: *${pkg[`name_${state.lang}`]}*`,
    `📐 Taille: *${state.currentSize}*`,
    `🔢 Quantité: *${state.currentQty}*`,
    `💰 Total: *${pkg.price * state.currentQty} MAD*`,
    ``,
    `🚚 Livraison gratuite partout au Maroc`,
    `💵 Paiement à la livraison`
  ];
  const msg = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${state.data.brand.whatsapp}?text=${msg}`, '_blank');
}

function whatsappOrder() {
  whatsappOrderWithInfo();
}

function toggleWishlist(id) {
  const idx = state.wishlist.indexOf(id);
  if (idx === -1) {
    state.wishlist.push(id);
    showToast(t('added_wishlist'), 'heart');
  } else {
    state.wishlist.splice(idx, 1);
    showToast(t('removed_wishlist'), 'heart-broken');
  }
  const btn = document.getElementById('wishlist-btn');
  if (btn) {
    const inList = state.wishlist.includes(id);
    btn.classList.toggle('active', inList);
    btn.innerHTML = `<i class="fa${inList ? 's' : 'r'} fa-heart"></i>`;
  }
  document.getElementById('wishlist-badge').textContent = state.wishlist.length;
  document.getElementById('wishlist-badge').classList.toggle('visible', state.wishlist.length > 0);
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
  // Clear the pack hash from URL
  if (window.location.hash.startsWith('#pack-')) {
    history.pushState(null, '', window.location.pathname + window.location.search);
  }
}

// ── Cart ─────────────────────────────────────────
function openCart() {
  renderCart();
  document.getElementById('cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

function renderCart() {
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-amount');
  const cartTotal = state.cart.reduce((s, i) => s + i.total, 0);
  if (totalEl) totalEl.textContent = cartTotal + ' MAD';

  if (!state.cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>${t('cart_empty')}</p>
      </div>`;
    return;
  }
  itemsEl.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.style.display='none'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${t('select_size')}: ${item.size} | ×${item.qty}</div>
        <div class="cart-item-price">${item.total} ${item.currency}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
    </div>
  `).join('');
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateCartBadge();
  renderCart();
  showToast(t('removed_from_cart'), 'minus-circle');
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
}

// ── Checkout ─────────────────────────────────────
function openCheckout() {
  if (!state.cart.length) { showToast('Panier vide', 'exclamation'); return; }
  state.checkoutStep = 1;
  state.checkoutData = {};
  renderCheckout();
  document.getElementById('checkout-overlay').classList.add('open');
  closeCart();
  document.body.style.overflow = 'hidden';
}

function renderCheckout() {
  const body = document.getElementById('checkout-body');
  const titles = [t('step1_title'), t('step2_title'), t('step3_title')];
  const steps = titles.map((title, i) => {
    const n = i + 1;
    const cls = n < state.checkoutStep ? 'done' : n === state.checkoutStep ? 'active' : '';
    return `<div class="step ${cls}">
      <div class="step-num">${n < state.checkoutStep ? '<i class="fas fa-check" style="font-size:0.65rem"></i>' : n}</div>
      <div class="step-label">${title}</div>
    </div>`;
  }).join('');

  let formHTML = '';
  if (state.checkoutStep === 1) {
    formHTML = `
      <div class="form-group"><label>${t('fullname')}</label><input type="text" class="form-input" id="f-name" placeholder="${t('fullname')}" value="${state.checkoutData.name || ''}"></div>
      <div class="form-group"><label>${t('phone')}</label><input type="tel" class="form-input" id="f-phone" placeholder="+212..." value="${state.checkoutData.phone || ''}"></div>
      <div class="checkout-nav">
        <button class="btn-next" onclick="checkoutNext()">${t('next')} <i class="fas fa-arrow-right"></i></button>
      </div>`;
  } else if (state.checkoutStep === 2) {
    formHTML = `
      <div class="form-group"><label>${t('city')}</label><input type="text" class="form-input" id="f-city" placeholder="${t('city')}" value="${state.checkoutData.city || ''}"></div>
      <div class="form-group"><label>${t('address')}</label><input type="text" class="form-input" id="f-address" placeholder="${t('address')}" value="${state.checkoutData.address || ''}"></div>
      <div class="form-group"><label>${t('notes')}</label><input type="text" class="form-input" id="f-notes" placeholder="${t('notes')}" value="${state.checkoutData.notes || ''}"></div>
      <div class="checkout-nav">
        <button class="btn-prev" onclick="checkoutPrev()"><i class="fas fa-arrow-left"></i> ${t('prev')}</button>
        <button class="btn-next" onclick="checkoutNext()">${t('next')} <i class="fas fa-arrow-right"></i></button>
      </div>`;
  } else {
    const total = state.cart.reduce((s, i) => s + i.total, 0);
    const summaryRows = state.cart.map(item => `
      <div class="summary-row"><span>${item.name} (${item.size}) ×${item.qty}</span><span>${item.total} MAD</span></div>
    `).join('');
    formHTML = `
      <div class="confirmation-content">
        <div class="confirmation-summary">
          <div class="summary-row"><span>${t('fullname')}</span><span>${state.checkoutData.name}</span></div>
          <div class="summary-row"><span>${t('phone')}</span><span>${state.checkoutData.phone}</span></div>
          <div class="summary-row"><span>${t('city')}</span><span>${state.checkoutData.city}</span></div>
          <div class="summary-row"><span>${t('address')}</span><span>${state.checkoutData.address}</span></div>
          <div style="border-top:1px solid var(--glass-border);margin:0.5rem 0"></div>
          ${summaryRows}
          <div class="summary-row"><span>${t('summary_delivery')}</span><span style="color:var(--gold)">${t('summary_delivery_val')}</span></div>
          <div class="summary-row total"><span>${t('summary_total')}</span><span>${total} MAD</span></div>
        </div>
        <div class="checkout-nav">
          <button class="btn-prev" onclick="checkoutPrev()"><i class="fas fa-arrow-left"></i> ${t('prev')}</button>
          <button class="btn-next" onclick="confirmOrder()">${t('confirm_order')} <i class="fas fa-check"></i></button>
        </div>
      </div>`;
  }

  body.innerHTML = `
    <div class="step-indicator">${steps}</div>
    ${formHTML}
  `;
}

function checkoutNext() {
  if (state.checkoutStep === 1) {
    const name = document.getElementById('f-name')?.value.trim();
    const phone = document.getElementById('f-phone')?.value.trim();
    if (!name || !phone) { showToast('Veuillez remplir tous les champs', 'exclamation'); return; }
    state.checkoutData.name = name;
    state.checkoutData.phone = phone;
  } else if (state.checkoutStep === 2) {
    const city = document.getElementById('f-city')?.value.trim();
    const address = document.getElementById('f-address')?.value.trim();
    if (!city || !address) { showToast('Veuillez remplir tous les champs', 'exclamation'); return; }
    state.checkoutData.city = city;
    state.checkoutData.address = address;
    state.checkoutData.notes = document.getElementById('f-notes')?.value.trim() || '';
  }
  state.checkoutStep = Math.min(3, state.checkoutStep + 1);
  renderCheckout();
}

function checkoutPrev() {
  state.checkoutStep = Math.max(1, state.checkoutStep - 1);
  renderCheckout();
}

function confirmOrder() {
  const total = state.cart.reduce((s, i) => s + i.total, 0);
  const d = state.checkoutData;
  const itemLines = state.cart.map(i => `📦 ${i.name} (${i.size}) ×${i.qty} — ${i.total} MAD`).join('\n');
  const msg = encodeURIComponent([
    `🛍 *NOCTA WEAR — Commande Confirmée*`,
    ``,
    `👤 *Client:* ${d.name}`,
    `📞 *Téléphone:* ${d.phone}`,
    `🏙 *Ville:* ${d.city}`,
    `🏠 *Adresse:* ${d.address}`,
    d.notes ? `📝 *Notes:* ${d.notes}` : '',
    ``,
    `*Articles commandés:*`,
    itemLines,
    ``,
    `💰 *Total: ${total} MAD*`,
    `🚚 Livraison gratuite`,
    `💵 Paiement à la livraison`
  ].filter(Boolean).join('\n'));

  const body = document.getElementById('checkout-body');
  body.innerHTML = `
    <div class="confirmation-content">
      <div class="confirmation-icon"><i class="fas fa-check"></i></div>
      <h3 class="confirmation-title">${t('order_confirmed')}</h3>
      <p class="confirmation-text">${t('order_text')}</p>
      <a href="https://wa.me/${state.data.brand.whatsapp}?text=${msg}" target="_blank" class="btn-whatsapp" style="justify-content:center;display:flex">
        <i class="fab fa-whatsapp"></i> ${t('send_whatsapp')}
      </a>
    </div>
  `;
  state.cart = [];
  updateCartBadge();
}

// ── Testimonials ─────────────────────────────────
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  const header = document.getElementById('testimonials-header');
  if (!grid || !state.data) return;
  if (header) header.innerHTML = `
    <p class="section-eyebrow">${t('testimonials_eyebrow')}</p>
    <h2 class="section-title">${t('testimonials_title')} <em>${t('testimonials_title_em')}</em></h2>
    <div class="section-line"></div>
  `;
  grid.innerHTML = state.data.testimonials.map((t_item, i) => `
    <div class="testimonial-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="stars">${'★'.repeat(t_item.rating)}</div>
      <p class="testimonial-text">"${t_item[`text_${state.lang}`]}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t_item.name.charAt(0)}</div>
        <div>
          <div class="author-name">${t_item.name}</div>
          <div class="author-city">${t_item[`city_${state.lang}`]}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── FAQ ───────────────────────────────────────────
function renderFAQ() {
  const list = document.getElementById('faq-list');
  const header = document.getElementById('faq-header');
  if (!list || !state.data) return;
  if (header) header.innerHTML = `
    <p class="section-eyebrow">${t('faq_eyebrow')}</p>
    <h2 class="section-title">${t('faq_title')} <em>${t('faq_title_em')}</em></h2>
    <div class="section-line"></div>
  `;
  list.innerHTML = state.data.faq.map((item, i) => `
    <div class="faq-item reveal" onclick="toggleFAQ(this)">
      <button class="faq-question">
        ${item[`q_${state.lang}`]}
        <i class="fas fa-plus faq-icon"></i>
      </button>
      <div class="faq-answer">${item[`a_${state.lang}`]}</div>
    </div>
  `).join('');
}

function toggleFAQ(el) {
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!wasOpen) el.classList.add('open');
}

// ── About ─────────────────────────────────────────
function renderAbout() {
  const header = document.getElementById('about-header');
  const featuresEl = document.getElementById('features-grid');
  const aboutDesc = document.getElementById('about-desc');
  if (header) header.innerHTML = `
    <p class="section-eyebrow">${t('about_eyebrow')}</p>
    <h2 class="section-title">${t('about_title')} <em>${t('about_title_em')}</em></h2>
    <div class="section-line"></div>
  `;
  if (aboutDesc) aboutDesc.textContent = t('about_description');
  const features = [
    { icon: 'fa-truck', title: t('free_delivery'), text: t('free_delivery_text') },
    { icon: 'fa-money-bill-wave', title: t('cash_on_delivery'), text: t('cash_on_delivery_text') },
    { icon: 'fa-gem', title: t('premium_quality'), text: t('premium_quality_text') },
    { icon: 'fa-redo', title: t('easy_exchange'), text: t('easy_exchange_text') }
  ];
  if (featuresEl) featuresEl.innerHTML = features.map((f, i) => `
    <div class="feature-item reveal reveal-delay-${i + 1}">
      <div class="feature-icon"><i class="fas ${f.icon}"></i></div>
      <div class="feature-title">${f.title}</div>
      <div class="feature-text">${f.text}</div>
    </div>
  `).join('');
}

// ── Instagram ─────────────────────────────────────
function renderInstagram() {
  const sec = document.getElementById('insta-section');
  if (!sec || !state.data) return;
  const header = document.getElementById('insta-header');
  if (header) header.innerHTML = `<p class="section-eyebrow">${t('insta_eyebrow')}</p>`;
  const banner = document.getElementById('insta-banner');
  if (banner) banner.innerHTML = `
    <div class="insta-handle">${state.data.brand.instagram || '@nocta_wear'}</div>
    <div class="insta-sub">${t('insta_sub')}</div>
    <a href="https://instagram.com/nocta_wear" target="_blank" class="btn-instagram">
      <i class="fab fa-instagram"></i> ${t('insta_btn')}
    </a>
  `;
}

// ── Footer ────────────────────────────────────────
function renderFooter() {
  const footer = document.getElementById('footer-content');
  if (!footer || !state.data) return;
  const links = t('footer_links');
  const slinks = t('footer_support_links');
  footer.innerHTML = `
    <div class="footer-main container">
      <div class="footer-brand">
        <div class="footer-logo">NOCTA WEAR</div>
        <div class="footer-tagline">${t('footer_tagline')}</div>
        <p id="footer-about-desc">${t('about_description')}</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">${t('footer_nav')}</div>
        <ul>${links.map((l, i) => `<li><a href="#">${l}</a></li>`).join('')}</ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">${t('footer_support')}</div>
        <ul>${slinks.map(l => `<li><a href="#">${l}</a></li>`).join('')}</ul>
      </div>
      <div class="footer-col footer-contact" id="contact">
        <div class="footer-col-title">${t('footer_contact')}</div>
        <p><i class="fab fa-whatsapp"></i> ${state.data.brand.whatsapp}</p>
        <p><i class="fab fa-instagram"></i> ${state.data.brand.instagram || '@nocta_wear'}</p>
        <p><i class="fas fa-truck"></i> ${state.data.brand.delivery || 'Livraison partout au Maroc'}</p>
        <p><i class="fas fa-money-bill-wave"></i> ${state.data.brand.payment || 'Paiement à la livraison'}</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="footer-bottom container">
      <span>${t('footer_copy')}</span>
      <div class="footer-bottom-right">
        <i class="fab fa-instagram" onclick="window.open('https://instagram.com/nocta_wear','_blank')"></i>
        <i class="fab fa-whatsapp" onclick="window.open('https://wa.me/${state.data.brand.whatsapp}','_blank')"></i>
      </div>
    </div>
  `;
}

// ── Scroll & Navbar ───────────────────────────────
function bindEvents() {
  // Navbar scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 80);
  });

  // Lang switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      renderAll();
      initScrollReveal();
    });
  });

  // Hamburger
  const ham = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Cart
  document.getElementById('cart-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.getElementById('checkout-btn')?.addEventListener('click', openCheckout);
  document.getElementById('checkout-close')?.addEventListener('click', () => {
    document.getElementById('checkout-overlay').classList.remove('open');
    document.body.style.overflow = '';
  });

  // WhatsApp cart button
  document.getElementById('cart-whatsapp-btn')?.addEventListener('click', () => {
    if (!state.cart.length) return;
    const total = state.cart.reduce((s, i) => s + i.total, 0);
    const lines = [`🛍 *NOCTA WEAR — Panier*`, ''];
    state.cart.forEach(i => lines.push(`📦 ${i.name} (${i.size}) ×${i.qty} — ${i.total} MAD`));
    lines.push('', `💰 *Total: ${total} MAD*`, `🚚 Livraison gratuite`, `💵 Paiement à la livraison`);
    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${state.data.brand.whatsapp}?text=${msg}`, '_blank');
  });

  // Search
  document.getElementById('search-btn')?.addEventListener('click', () => {
    document.getElementById('search-overlay').classList.add('open');
    document.getElementById('search-input')?.focus();
  });
  document.getElementById('search-close')?.addEventListener('click', () => {
    document.getElementById('search-overlay').classList.remove('open');
  });
  document.getElementById('search-input')?.addEventListener('input', e => {
    filterPackages(e.target.value.toLowerCase());
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay, .checkout-overlay, .search-overlay').forEach(el => {
        el.classList.remove('open');
      });
      document.getElementById('cart-drawer').classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close modals on overlay click
  document.getElementById('package-modal')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal('package-modal');
  });
  document.getElementById('checkout-overlay')?.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

function filterPackages(query) {
  if (!state.data) return;
  document.getElementById('search-overlay').classList.remove('open');
  if (!query) { renderPackages(); return; }
  const filtered = state.data.packages.filter(p =>
    p[`name_${state.lang}`].toLowerCase().includes(query) ||
    p[`description_${state.lang}`].toLowerCase().includes(query)
  );
  const grid = document.getElementById('packages-grid');
  if (!grid) return;
  grid.innerHTML = filtered.length ? filtered.map((pkg, i) => `
    <div class="package-card" data-id="${pkg.id}" onclick="openPackageModal('${pkg.id}')">
      <div class="card-image-wrap">
        <img src="${pkg.image}" alt="${pkg[`name_${state.lang}`]}" loading="lazy">
        <div class="card-badge">${pkg[`badge_${state.lang}`]}</div>
        <div class="card-overlay"></div>
      </div>
      <div class="card-body">
        <h3 class="card-name">${pkg[`name_${state.lang}`]}</h3>
        <p class="card-desc">${pkg[`description_${state.lang}`]}</p>
        <div class="card-footer">
          <div class="card-price">${pkg.price}<span>${pkg.currency}</span></div>
          <button class="card-btn">${t('choose_package')}</button>
        </div>
      </div>
    </div>
  `).join('') : `<div style="grid-column:1/-1;text-align:center;color:var(--white-faint);padding:3rem">Aucun résultat trouvé</div>`;
  document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
}

// ── Scroll Reveal ─────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Toast ─────────────────────────────────────────
function showToast(msg, icon = 'check-circle') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-${icon}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ── Global Exposure ───────────────────────────────
window.openPackageModal = openPackageModal;
window.closeModal = closeModal;
window.selectSize = selectSize;
window.changeQty = changeQty;
window.addToCart = addToCart;
window.whatsappOrder = whatsappOrder;
window.whatsappOrderWithInfo = whatsappOrderWithInfo;
window.submitModalWhatsapp = submitModalWhatsapp;
window.toggleWishlist = toggleWishlist;
window.toggleFAQ = toggleFAQ;
window.openCart = openCart;
window.closeCart = closeCart;
window.openCheckout = openCheckout;
window.checkoutNext = checkoutNext;
window.checkoutPrev = checkoutPrev;
window.confirmOrder = confirmOrder;
