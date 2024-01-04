document.addEventListener("DOMContentLoaded", function () {
  const welcomeMessage = document.getElementById("welcomeMessage");
  const storedUsername = localStorage.getItem("username");
  const storedGender = localStorage.getItem('gender');
  const storedEmail = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  const specialQue = document.getElementById('specialQue');
  const registerButton = document.getElementById('registerButton');
  if (storedUsername && storedGender === 'male') {
    welcomeMessage.textContent = `مرحبًا  ، ${storedUsername} في مكتبة جيوم`;
    specialQue.textContent = `سيد ${storedUsername} ، إلى أين تريد أن تذهب ؟`;
    registerButton.style.display = 'none';

  } else if (storedUsername && storedGender === 'female'){
    welcomeMessage.textContent = `مرحبا ، ${storedUsername} في مكتبة جيوم`;
    specialQue.textContent = `آنسة ${storedUsername} ، إلى أين تريدين الذهاب ؟`;
    registerButton.style.display = 'none';
  } 
   else{
    welcomeMessage.textContent = `مرحبًا بك في مكتبة جيوم ، سجل الدخول للحصول على جميع المزايا`;
  }
    if (storedEmail === 'admin@1' && storedUsername === 'admin' && password === 'yha232008'){
    welcomeMessage.textContent = `مرحبا ، إذهب للعمل الآن وإضافة الكتب`;
    specialQue.textContent = `إلى أين تريد الذهاب أيها مشرف ؟`;
    registerButton.style.display = 'block';
  }
    const bookContainers = document.querySelectorAll(".book-container");
    const scrollAmount = 220;

    bookContainers.forEach(function (bookContainer) {
      const arrowLeftButton = bookContainer.querySelector(".arrowLeft");
      const arrowRightButton = bookContainer.querySelector(".arrowRight");

      if (arrowLeftButton) {
        arrowLeftButton.addEventListener("click", function () {
          bookContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        });
      }

      if (arrowRightButton) {
        arrowRightButton.addEventListener("click", function () {
          bookContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        });
      }
    });
  });
document.addEventListener('DOMContentLoaded', function () {
  const buttonUp = document.querySelector('.button-up');

  // Function to toggle the button visibility based on scroll position
  function toggleButtonVisibility() {
    const featuredBooksSection = document.querySelector('#featuredBooks');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= featuredBooksSection.offsetTop) {
      buttonUp.style.opacity = '1';
      buttonUp.style.transform = 'translateY(0)';
    } else {
      buttonUp.style.opacity = '0';
      buttonUp.style.transform = 'translateY(-15px)';
    }
  }

  // Initial call to set the initial visibility
  toggleButtonVisibility();

  // Event listener for scrolling
  window.addEventListener('scroll', toggleButtonVisibility);

  // Event listener for button click to smoothly scroll to top
  buttonUp.addEventListener('click', function (e) {
    e.preventDefault();

    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  });
});
// Smooth scroll function
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop + 100, // Subtract 60 pixels from the top offset
      behavior: 'smooth',
    });
  }
}

// Example of how to use smoothScroll
  const buttons = document.querySelectorAll('.featured-button, .favorite-button , .reading-button');
  buttons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      smoothScroll(targetId);
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];

    var favoriteBookContainer = document.querySelector('.favorite-book-container');

    var noFavoriteElement = document.querySelector('.no-favorite');

    favoriteBooks.forEach(function (bookInfo) {
        var bookElement = document.createElement('div');
        bookElement.classList.add('book');

        var bookLinkElement = document.createElement('a');
        bookLinkElement.classList.add('book-link');
        bookLinkElement.href = bookInfo.link; // Assuming 'link' is the key for the href URL in your bookInfo

        // Create img element
        var bookImageElement = document.createElement('img');
        bookImageElement.classList.add('book-img');
        bookImageElement.src = bookInfo.image;

        var bookNameElement = document.createElement('h3');
        bookNameElement.textContent = bookInfo.name;
        bookNameElement.style.width = '100%';
        bookNameElement.style.margin = 'auto';
        bookNameElement.style.textAlign = 'center';
        var bookAuthorElement = document.createElement('p');
        bookAuthorElement.textContent = bookInfo.author;

        bookLinkElement.appendChild(bookImageElement);
        bookLinkElement.appendChild(bookNameElement);
        bookLinkElement.appendChild(bookAuthorElement);
        bookElement.appendChild(bookLinkElement);
        favoriteBookContainer.appendChild(bookElement);
    });

    // Hide the no-favorite element if there are favorite books
    noFavoriteElement.style.display = favoriteBooks.length > 0 ? 'none' : 'block';
});
