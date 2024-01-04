document.addEventListener("DOMContentLoaded", function () {
  const bookContainers = document.querySelectorAll(".book-container");
  const scrollAmount = 220;

  bookContainers.forEach(function (bookContainer) {
    const arrowLeftButton = bookContainer.querySelector(".arrowLeft");
    const arrowRightButton = bookContainer.querySelector(".arrowRight");

    arrowLeftButton.addEventListener("click", function () {
      bookContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    arrowRightButton.addEventListener("click", function () {
      bookContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  });
});
