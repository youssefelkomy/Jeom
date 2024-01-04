document.addEventListener('DOMContentLoaded', function () {
    const customSelect = document.querySelector('.custom-select');
    const selectDropdown = document.querySelector('.select-dropdown');
    const selectStyled = document.querySelector('.select-styled');
    const selectOptions = document.querySelector('.select-options');

    // Display the options list when clicking on the styled select
    selectStyled.addEventListener('click', function () {
        selectOptions.style.display = 'block';
    });

    // Handle selecting an option
    selectOptions.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const selectedValue = event.target.getAttribute('data-value');
            selectStyled.innerText = event.target.innerText;
            selectDropdown.value = selectedValue;
            selectOptions.style.display = 'none';
        }
    });
    
    // Hide the options list when clicking outside the custom select
    document.addEventListener('click', function (event) {
        if (!customSelect.contains(event.target)) {
            selectOptions.style.display = 'none';
        }
    });

    // Show the section when the user clicks on a button
    function showSection(section) {
        section.style.display = 'block';

        // Force a reflow to apply the initial styles before adding the 'show' class
        section.offsetHeight;

        // Add the 'show' class for animations
        section.classList.add("show");
    }

    // Show the profile when the user clicks on the "الملف الشخصي" button
    const profileButton = document.querySelector('[data-target="profile"]');
    const profile = document.querySelector(".profile");

    profileButton.addEventListener('click', function () {
        profile.classList.remove("show");
        showSection(profile);
    });

    // Show the account when the user clicks on the "الحساب" button
    const accountButton = document.querySelector('[data-target="account"]');
    const account = document.querySelector(".account");

    accountButton.addEventListener('click', function () {
        account.classList.remove("show");
        showSection(account);
    });

    // Show the appearance when the user clicks on the "المظهر" button
    const appearanceButton = document.querySelector('[data-target="appearance"]');
    const appearance = document.querySelector(".appearance");

    appearanceButton.addEventListener('click', function () {
        appearance.classList.remove("show");
        showSection(appearance);
    });

    // Repeat animation on every iteration
    profile.addEventListener('animationiteration', function () {
        profile.classList.remove("show");
    });

    account.addEventListener('animationiteration', function () {
        account.classList.remove("show");
    });

    appearance.addEventListener('animationiteration', function () {
        appearance.classList.remove("show");
    });
});
