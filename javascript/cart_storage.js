document.addEventListener('DOMContentLoaded', function() {
  const addToCartBtn = document.getElementById('addToCartBtn');
  const popup = document.getElementById('addToCartPopup');
  const closePopupBtn = document.getElementById('closePopup');
  const cartIcon = document.querySelector('.cart-icon');
  const cartCount = document.getElementById('cartCount');

  let count = parseInt(localStorage.getItem('cartCount')) || 0;

  function updateCartCount() {
    cartCount.textContent = count;
    localStorage.setItem('cartCount', count.toString());
  }

  addToCartBtn.addEventListener('click', function() {
    count++;
    updateCartCount();
    popup.style.display = 'block';
  });

  closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  updateCartCount();
});