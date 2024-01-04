function downloadBook() {
  const downloadButton = document.querySelector(".download-button");
  downloadButton.disabled = true;
  const backButton = document.querySelector(".back-button");
  backButton.disabled = true;
  const buttonText = document.querySelector(".white");
  buttonText.innerHTML = "";

  const loadingCircle = document.querySelector("#loading-circle");
  loadingCircle.style.display = "block";
  setTimeout(() => {
    downloadButton.disabled = false;
    backButton.disabled = false;
    buttonText.innerHTML = "إعادة التحميل";
    loadingCircle.style.display = "none";
  }, 2000);

}
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  }
}
const buttons = document.querySelectorAll('.button-up , .download-icon, .sorts a'); //Delete .sorts a at the suitable time
buttons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    smoothScroll(targetId);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const buttonUp = document.querySelector('.button-up');
  function toggleButtonVisibility() {
    const featuredBooksSection = document.querySelector('img');
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
  const sort2 = document.querySelector('sort2');
  const sort3 = document.querySelector('sort3');
  
  if(sort2 === ''){
    sort2.style.opacity = '0';
  }
  
  if(sort3 === ''){
    sort3.style.display = 'none';
  }
  
});