document.addEventListener('DOMContentLoaded', function () {
    // Initialize favorite icons based on stored favorites
    var favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    var favoriteText = localStorage.getItem('favoriteText') || 'إضافة إلى المفضلة';
    const favoriteTextElement = document.querySelector('.favorite p');
    favoriteTextElement.textContent = favoriteText;
    var favorite = document.querySelector('.favorite');

    favoriteBooks.forEach(function (bookInfo) {
        var bookContainer = findBookContainerByName(bookInfo.name);
        if (bookContainer) {
            var favoriteIcon = bookContainer.querySelector('.favorite i');
            if (favoriteIcon) {
                var isFavorite = getFavoriteIcon(bookInfo.name);
                updateFavoriteIcon(favoriteIcon, isFavorite, bookInfo.name, bookInfo.favoriteText); // Pass favoriteText
            }
        }
    });

    // Add click event listeners to favorite buttons
    var favoriteButtons = document.querySelectorAll('.favorite');
    favoriteButtons.forEach(function (favoriteButton) {
        favoriteButton.addEventListener("click", function () {
            const alertElement = document.querySelector('.alert1');
            var favoriteContainer = favoriteButton.closest('.container');
            var favoriteIcon = favoriteContainer.querySelector('.favorite i');
            if (!favoriteIcon) {
                console.error('Error: Favorite icon not found.');
                return;
            }

            var isBookAddedToFavorites = favoriteIcon.classList.contains('fa-solid');
            var bookName = getBookInfo(favoriteContainer, 'h1').trim();
            var bookAuthor = getBookInfo(favoriteContainer, '.auther-name');
            var bookImage = getBookInfo(favoriteContainer, 'img', 'src');
            var bookLink = getBookInfo(favoriteContainer, 'a', 'href');
            var bookText = getBookInfo(favoriteContainer, '.book-text');
            var bookFavoriteText = getBookInfo(favoriteContainer, '.favorite-text'); // Add this line

            handleFavoriteAction(isBookAddedToFavorites, alertElement, favoriteIcon, bookName, bookAuthor, bookImage, bookLink, bookText, bookFavoriteText); // Pass bookFavoriteText
        });
    });

    // Retrieve and log the current state of localStorage for '.favorite i' elements
    var favoriteIcons = document.querySelectorAll('.favorite i');
    favoriteIcons.forEach(function (favoriteIcon) {
        var bookName = getBookInfo(favoriteIcon.closest('.container'), 'h1').trim();
        var isFavorite = getFavoriteIcon(bookName);
        updateFavoriteIcon(favoriteIcon, isFavorite, bookName); // Update the UI
    });

    function updateFavoriteIcon(favoriteIcon, isAdded, bookName, bookFavoriteText) {
        localStorage.setItem('favoriteIcon_' + bookName, isAdded);

        favoriteIcon.classList.toggle('fa-solid', isAdded);
        favoriteIcon.classList.toggle('fa-regular', !isAdded);
        favoriteIcon.classList.toggle('fa-star', true);

        // Update favoriteText based on the book
        if (bookFavoriteText) {
            favoriteText = bookFavoriteText;
        } else {
            favoriteText = isAdded ? 'تمت الإضافة إلى المفضلة' : 'إضافة إلى المفضلة';
        }
        localStorage.setItem('favoriteText', favoriteText);
        favoriteTextElement.textContent = favoriteText;
    }

    function getFavoriteIcon(bookName) {
        var isFavorite = localStorage.getItem('favoriteIcon_' + bookName);
        return isFavorite === 'true';
    }

    function handleFavoriteAction(isBookAddedToFavorites, alertElement, favoriteIcon, bookName, bookAuthor, bookImage, bookLink, bookText, bookFavoriteText) {
        var favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];

        if (!isBookAddedToFavorites) {
            updateFavoriteIcon(favoriteIcon, true, bookName, bookFavoriteText);
            favoriteBooks.push({ name: bookName, author: bookAuthor, image: bookImage, link: bookLink, isFavorite: true, favoriteText: bookFavoriteText });
            showMessage(alertElement, '#d1e7dd', `لقد أضفت كتاب <strong>${bookName}</strong> إلى المفضلة ${bookText}`);
            favoriteIcon.style.rotate = '360deg';
        } else {
            updateFavoriteIcon(favoriteIcon, false, bookName, bookFavoriteText);
            var bookIndex = favoriteBooks.findIndex(book => book.name.trim() === bookName);
            if (bookIndex !== -1) {
                favoriteBooks.splice(bookIndex, 1);
                showMessage(alertElement, '#f8d7da', `لقد أزلت كتاب <strong>${bookName}</strong> من المفضلة ${bookText}`);
                favoriteIcon.style.rotate = '-360deg';
                favorite.style.transform = 'scaleX(1)';

            }
        }
        localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));

        // Set document title
    }



    function showMessage(element, backgroundColor, message) {
        if (element) {
            const screenWidth = window.innerWidth;
            element.style.backgroundColor = backgroundColor;
            element.innerHTML = message;
            element.style.opacity = '1';
            element.style.top = '0%';
            element.style.margin = '0';
            setTimeout(() => {
                hideMessage(element);
            }, 1000);
            if (screenWidth > 768) {
                element.style.top = '1%';
            }
        } else {
            console.error('Error: Invalid element or style property not available.');
        }
    }

    function hideMessage(element) {
        if (element && element.style) {
            element.style.opacity = '0';
            element.style.top = '-10%';
        } else {
            console.error('Error: Invalid element or style property not available.');
        }
    }

    function getBookInfo(container, selector, attribute) {
        var element = container.querySelector(selector);
        if (element) {
            return attribute ? element[attribute] : element.textContent;
        }
        return '';
    }

    function findBookContainerByName(bookName) {
        var bookContainers = document.querySelectorAll('.book');
        for (var i = 0; i < bookContainers.length; i++) {
            var currentBookName = getBookInfo(bookContainers[i], 'h1');
            if (currentBookName === bookName) {
                return bookContainers[i];
            }
        }
        return null;
    }
});
