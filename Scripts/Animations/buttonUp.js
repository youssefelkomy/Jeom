document.addEventListener('DOMContentLoaded', function () {
    const buttonUp = document.querySelector('.button-up');
    function toggleButtonVisibility() {
      const featuredBooksSection = document.querySelector('h3');
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= featuredBooksSection.offsetTop) {
        buttonUp.style.opacity = '1';
        buttonUp.style.transform = 'translateY(0)';
      } else {
        buttonUp.style.opacity = '0';
        buttonUp.style.transform = 'translateY(-5px)';
      }
    }
  
    toggleButtonVisibility();
  
    window.addEventListener('scroll', toggleButtonVisibility);
  
    buttonUp.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    });
  });