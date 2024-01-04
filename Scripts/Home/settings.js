document.addEventListener("DOMContentLoaded", function () {
  // Get all the li elements in the settings sidebar
  const listItems = document.querySelectorAll('.settings-sidebar li');
  const chooseMesage = document.querySelector('.choose-message');
  const sections = document.querySelectorAll('.settings > div');
  const nameDisplay = document.getElementById("nameDisplay");
  const storedUsername = localStorage.getItem("username");
  const emailDisplay = document.getElementById("emailDisplay");
  const storedEmail = localStorage.getItem("email");
  const passwordDisplay = document.getElementById("passwordDisplay");
  const storedPassword = localStorage.getItem("password");
  listItems.forEach(li => {
    li.addEventListener('click', function () {
      listItems.forEach(item => {
        item.classList.remove('active');
      });

      this.classList.add('active');

      sections.forEach(section => {
        section.style.display = 'none';
      });

      const targetId = this.querySelector('button').getAttribute('data-target');

      document.getElementById(targetId).style.display = 'block';
      chooseMesage.style.display = 'none';
    });
  });
  if (storedUsername) {
    nameDisplay.textContent = `إسمك هو : ${storedUsername}`;
    emailDisplay.textContent = `البريد الإلكتروني الخاص بك هو : ${storedEmail}`
    const maskedPassword = storedPassword.substring(0, 2) + '*'.repeat(storedPassword.length - 2);
    passwordDisplay.textContent = `كلمة مرور حسابك هي : ${maskedPassword}`;
  } else {
    nameDisplay.textContent = ` لم يتم تسجيل الدخول ، لذلك ليس هناك إسم محدد ، نرجوا تسجيل الدخول للإستفادة من هذه المميزات`;
    emailDisplay.textContent = `لم يتم تسجيل الدخول ، لذلك ليس هناك بريد إلكتروني ، نرجوا تسجيل الدخول للإستفادة من هذه المميزات`;
    passwordDisplay.textContent = null;
    const changeButtons = document.querySelectorAll('.change-button');
    changeButtons.forEach(button => {
      button.style.display = 'none';
    });
    cancelSettings.textContent = null;
    const savesettings = document.querySelectorAll('.save-settings');
    savesettings.forEach(button => {
      button.textContent = `تسجيل الدخول`;
      button.addEventListener("click", function () {
        window.location.href = '../registration/register.html'
      });
    });
    const cancelsettings = document.querySelectorAll('.cancel-settings');
    cancelsettings.forEach(button => {
      button.style.display = 'none';
    });
  }
});
function showChangeNameForm() {
  // Hide the current name display
  document.getElementById('nameDisplay').style.display = 'none';
  document.querySelector('.change-name').style.display = 'none';

  // Show the change name form
  document.getElementById('changeNameForm').style.display = 'flex';
  document.getElementById('changeNameForm').style.flexDirection = 'column';
  document.querySelector('.settings-sidebar').style.filter = 'blur(5px)';
  document.querySelector('.profile h2').style.filter = 'blur(5px)';
  document.querySelector('.save-settings').style.filter = 'blur(5px)';
  document.body.style.backgroundColor = '#c1c1c1';
  document.querySelector('.settings-sidebar').style.backgroundColor = '#b8b8b8';

}
const alert = document.getElementById("alert");
function changeName() {
  // Get the new name from the form
  const newName = document.getElementById('newName').value;
  // Update the name display
  if(!newName){
    alert.textContent = `يجب عليك كتابة إسم`
    alert.style.opacity = '1';
    console.error('You must write a name');
    return;
  } else if(newName.length < 3){
    alert.textContent = `يجب عليك كتابة إسم يتكون من ثلاثة أحرف على الأقل`;
    alert.style.opacity = '1';
  }
  else{
    document.getElementById('nameDisplay').innerText = `إسمك هو : ${newName}`;

    // Update local storage with the new name
    localStorage.setItem('username', newName);
  
    // Hide the change name form
    document.getElementById('changeNameForm').style.display = 'none';
  
    // Show the updated name display
    document.getElementById('nameDisplay').style.display = 'flex';
    document.querySelector('.change-name').style.display = 'flex';
    alert.style.opacity = '0';
    document.querySelector('.settings-sidebar').style.filter = 'none';
    document.querySelector('.profile h2').style.filter = 'none';
    document.querySelector('.save-settings').style.filter = 'none';
    document.body.style.backgroundColor = '#f9f9f9';
    document.querySelector('.settings-sidebar').style.backgroundColor = 'rgb(221, 221, 221)';
  }
}


function cancelChangeName() {
  // Show the original name display
  document.getElementById('nameDisplay').style.display = 'flex';
  document.querySelector('.change-name').style.display = 'flex';

  // Hide the change name form
  document.getElementById('changeNameForm').style.display = 'none';
  alert.style.opacity = '0';
  document.querySelector('.settings-sidebar').style.filter = 'none';
  document.querySelector('.profile h2').style.filter = 'none';
  document.querySelector('.save-settings').style.filter = 'none';
  document.body.style.backgroundColor = '#f9f9f9';
  document.querySelector('.settings-sidebar').style.backgroundColor = 'rgb(221, 221, 221)';


}  