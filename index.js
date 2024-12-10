// Simple functionality for toggling product details
document.querySelectorAll('.accordion-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      document.querySelector(target).classList.toggle('show');
    });
  });
  