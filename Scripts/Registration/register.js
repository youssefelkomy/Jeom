document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const registerButton = document.querySelector("button[type='submit']");
  const loadingCircle = document.getElementById('loading-circle');
  const sendMessageText = document.getElementById("regit");
  const usernameAlert = document.getElementById("usernameAlert");
  const emailAlert = document.getElementById("emailAlert");
  const passwordAlert = document.getElementById("passwordAlert");
  const alert = document.getElementById("alert");
  const genderInputs = document.querySelectorAll("input[name='gender']");
  const screenWidth = window.innerWidth;
  function checkForm() {
    const isUsernameValid = usernameInput.value.length >= 3;
    const isEmailValid = emailInput.value.length >= 7;
    const isPasswordValid = passwordInput.value.length >= 8;

    toggleAlert(usernameAlert, isUsernameValid);
    toggleAlert(emailAlert, isEmailValid);
    toggleAlert(passwordAlert, isPasswordValid);

    const selectedGender = getSelectedGender();
    registerButton.disabled = !(isUsernameValid && isEmailValid && isPasswordValid);
  }

  function toggleAlert(alertElement, isValid) {
    if (isValid) {
      alertElement.classList.remove("active1");
    } else {
      alertElement.classList.add("active1");
    }
  }

  function storeUserData() {
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const gender = getSelectedGender();

    // Store data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("gender", gender);
  }

  function getSelectedGender() {
    for (const genderInput of genderInputs) {
      if (genderInput.checked) {
        return genderInput.value;
      }
    }
    return ""; // Return an empty string if no gender is selected
  }

  function validateForm(event) {
    event.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const storedEmail = localStorage.getItem("email");
    const selectedGender = getSelectedGender();

    if (storedEmail === email) {
      alert.textContent = `لقد أدخلت هذا البريد الإلكتروني من قبل يرجى تسجيل الدخول !`
      alert.style.opacity = "1";
     if (screenWidth < 770) {
        alert.style.top = "-1%";
        return;
      } else{
        alert.style.top = '1%';
      }
    } else if (email == 'admin@1' && username === 'admin' && password === 'yha232008'){
      storeUserData();
      registerButton.setAttribute("disabled", "disabled");
      sendMessageText.textContent = '';
      loadingCircle.style.display = 'block';
      setTimeout(() => {
        window.location.href = '../../index.html';
      }, 600);
    }
     else {
      if (!registerButton.disabled && selectedGender) {
        storeUserData();
        registerButton.setAttribute("disabled", "disabled");
        sendMessageText.textContent = '';
        loadingCircle.style.display = 'block';
        setTimeout(() => {
          window.location.href = '../../index.html';
        }, 600);
      }
       else {
        alert.textContent = `يجب عليك أن تختار جنسك`;
        alert.style.opacity = '1';
        if (screenWidth < 770) {
          alert.style.top = "-1%";
          return;
        } else{
          alert.style.top = '1%';
        }
      }
    }
  }

  usernameInput.addEventListener("input", checkForm);
  emailInput.addEventListener("input", checkForm);
  passwordInput.addEventListener("input", checkForm);

  for (const genderInput of genderInputs) {
    genderInput.addEventListener("change", checkForm);
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  registerButton.addEventListener("click", validateForm);
});
