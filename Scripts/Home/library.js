document.addEventListener("DOMContentLoaded", function () {
  const storedEmail = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  const storedUsername = localStorage.getItem("username");
  if(storedEmail === 'admin@1' && password === 'yha232008' && storedUsername === 'admin'){
    const addBooks = document.getElementById('addBooks');
    addBooks.style.display = 'block';
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const buttonUp = document.querySelector('.button-up');
  function toggleButtonVisibility() {
    const featuredBooksSection = document.querySelector('#libraryHeader');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= featuredBooksSection.offsetTop) {
      buttonUp.style.opacity = '1';
    } else {
      buttonUp.style.opacity = '0';
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