"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector("button[type='submit']");
  const loadingCircle = document.getElementById('loading-circle');
  const loginText = document.getElementById("regit");
  const emailAlert = document.getElementById("emailAlert");
  const passwordAlert = document.getElementById("passwordAlert");
  const alert = document.getElementById("alert");
  function checkForm() {
    const isEmailValid = emailInput.value.length >= 7;
    const isPasswordValid = passwordInput.value.length >= 8;

    toggleAlert(emailAlert, isEmailValid);
    toggleAlert(passwordAlert, isPasswordValid);

    loginButton.disabled = !(isEmailValid && isPasswordValid);
  }

  function toggleAlert(alertElement, isValid) {
    if (isValid) {
      alertElement.classList.remove("active1");
    } else {
      alertElement.classList.add("active1");
    }
  }

  function validateLogin(event) {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword){
      // Correct login credentials, redirect to index.html
      loginButton.setAttribute("disabled", "disabled");
      loginText.textContent = '';
      loadingCircle.style.display = 'block';
      setTimeout(() => {
        window.location.href = '../../index.html';
      }, 600);
    }
     else {
      alert.style.opacity = "1";
      if (screenWidth < 770) {
        alert.style.top = "-1%";
        return;
      } else{
        alert.style.top = '1%';
      }
    }
  }

  emailInput.addEventListener("input", checkForm);
  passwordInput.addEventListener("input", checkForm);

  const form = document.querySelector("form");
  form.addEventListener("submit", validateLogin);
  
  if (email === 'yha232008@gmail.com' && password === "55555555"){
    loginButton.setAttribute("disabled", "disabled");
    loginText.textContent = '';
    loadingCircle.style.display = 'block';
    setTimeout(() => {
      window.location.href = '../../index.html';
    }, 600);
  }
});
