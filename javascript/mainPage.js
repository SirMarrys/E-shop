document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const sideMenu = document.getElementById('sideMenu');

  menuButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
      }
    });
  }

  const cartCount = document.getElementById('cartCount');
  const resetCartButton = document.getElementById('resetCartButton');

  function updateCartCount() {
    const count = localStorage.getItem('cartCount') || '20';
    if (cartCount) {
      cartCount.textContent = count;
    }
  }

  function resetCart() {
    localStorage.setItem('cartCount', '20');
    updateCartCount();
  }

  updateCartCount();

  if (resetCartButton) {
    resetCartButton.addEventListener('click', resetCart);
  }

  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  });

  const buyButtons = document.querySelectorAll('.buy-button');

  buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
});