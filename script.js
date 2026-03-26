// ─── Estado del carrito ───────────────────────────────────
let cartCount = 0;
 
const cartCountEl = document.getElementById('cart-count');
 
// ─── Toast notifications (reemplaza los alert) ────────────
function showToast(message, icon = '🛒') {
  const container = document.getElementById('toast-container');
  if (!container) return;
 
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
 
  // Auto-eliminar tras 3 s
  setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}
 
// ─── Actualizar contador con animación ────────────────────
function updateCartCount() {
  if (!cartCountEl) return;
  cartCountEl.textContent = String(cartCount);
 
  // Animación "bump"
  cartCountEl.classList.remove('bump');
  void cartCountEl.offsetWidth; // reflow para reiniciar la animación
  cartCountEl.classList.add('bump');
  cartCountEl.addEventListener('transitionend', () => {
    cartCountEl.classList.remove('bump');
  }, { once: true });
}
 
// ─── Añadir al carrito ────────────────────────────────────
function addToCart(btn) {
  const product = btn.getAttribute('data-product') || 'producto';
  cartCount += 1;
  updateCartCount();
  showToast(`"${product}" añadido al carrito`, '✅');
}
 
// ─── Botón principal ──────────────────────────────────────
const mainBtn = document.querySelector('.add-to-cart');
if (mainBtn) {
  mainBtn.addEventListener('click', () => addToCart(mainBtn));
}
 
// ─── Botones de tarjetas (delegar en el grid) ─────────────
document.querySelectorAll('.card-btn').forEach(btn => {
  btn.addEventListener('click', () => addToCart(btn));
});
 
// ─── Botón carrito (header) ───────────────────────────────
const cartBtn = document.getElementById('cart-button');
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    if (cartCount === 0) {
      showToast('Tu carrito está vacío', '🛒');
    } else {
      showToast(`Tienes ${cartCount} artículo${cartCount > 1 ? 's' : ''} en el carrito`, '🧺');
    }
  });
}