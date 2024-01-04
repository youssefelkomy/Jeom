function generateBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const bookContent = document.getElementById('bookContent').value;
  const publishYear = document.getElementById('publishYear').value;
  const ogContent = document.getElementById('ogContent').value;
  const sort1 = document.getElementById('sort1').value;
  const sort2 = document.getElementById('sort2').value;
  const sort3 = document.getElementById('sort3').value;
  const bookURL = document.getElementById('bookUrl').value;
  const pagesNumber = document.getElementById('pagesNamber').value;
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    
    <head>
      <!-- Meta Information -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description"
        content="${bookContent}">
      <meta name="author" content="Youssef Elkomy">
      <meta name="keywords" content="كتب, مكتبة, ثقافة, روايات, علوم, أدب, ${bookName}">
      <meta property="og:title" content="${bookName} - مكتبة جيوم">
      <meta property="og:description"
        content="${ogContent}">
      <meta property="og:image" content="https://jeom.netlify.app/Images/Book%20Covers/${bookURL}.webp">
      <meta property="og:url" content="https://jeom.netlify.app/home/book/${bookURL}.html">

      <!-- Twitter Card data -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:site" content="@YourTwitterHandle">
      <meta name="twitter:title" content="${bookName} - مكتبة جيوم">
      <meta name="twitter:description"
        content=".استمتع برحلة فريدة من التفاعل بين الأحداث في كتاب ${bookName} في مكتبة جيوم، حيث يأخذك في رحلة أدبية ملهمة ومثيرة للفهم العميق.">
      <meta name="twitter:image" content="https://jeom.netlify.app/Images/Book%20Covers/${bookURL}.webp">    
    
      <!-- Title -->
      <title>${bookName} - مكتبة جيوم</title>

      <!-- Favicon -->
      <link rel="icon" type="image/x-icon" href="https://jeom.netlify.app/Images/Icons/favicon.ico">
    
      <!-- External Fonts -->
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
      <!-- Stylesheets -->
    
      <link rel="stylesheet" href="../../css/landing.css">
      <link rel="stylesheet" href="../../css/loading.css">
      <link rel="stylesheet" href="../../css/book.css">
      <link rel="stylesheet" href="../../css/up-button.css">
      <link rel="stylesheet" href="../../css/alert.css">
        

    </head>
    <body>
      <header dir="rtl">
        <nav class="nav-buttons" dir="rtl">
          <div>
            <ul>
              <li><button onclick="window.location.href = '../../index.html'">الرئيسية</button></li>
              <li><button onclick="window.location.href = '../page/library.html'" class="libr">المكتبة</button></li>
              <li><button onclick="window.location.href = '../page/services.html';">الخدمات</button></li>
              <li><button onclick="window.location.href = '../page/about.html';">من نحن</button></li>
              <li><button onclick="window.location.href = '../page/contact.html';">اتصل بنا</button></li>
            </ul>
          </div>
          <ul>
          </ul>
        </nav>
        <div class="wrapper">
          <h2>مكتبة جيوم</h2>
          <div class="contain" onclick="myFunction(this)" id="navBar">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <div id="overlay" class="overlay"></div>
          <div class="sidebar" id="sideBar">
            <button class="close-i mob-buttons" id="closeI">
              <span><i class="fa-solid fa-xmark"></i></span>
            </button>
            <ul>
              <li>
                <i class="fa-solid fa-house fa-lg"></i>
                <button class="mob-buttons" onclick="window.location.href = '../../index.html'">الرئيسية</button>
              </li>
              <li>
                <i class="fa-solid fa-book fa-lg"></i>
                <button class="mob-buttons" onclick="window.location.href = '../page/library.html'">المكتبة</button>
              </li>
              <li>
                <i class="fa-solid fa-circle-info fa-lg"></i>
                <button class="mob-buttons" onclick="window.location.href = '../page/services.html';">الخدمات</button>
              </li>
              <li>
                <i class="fa-solid fa-users fa-lg"></i>
                <button class="mob-buttons" onclick="window.location.href = '../page/about.html';">من نحن</button>
              </li>
              <li>
                <i class="fa-solid fa-message fa-lg"></i>
                <button class="mob-buttons" onclick="window.location.href = '../page/contact.html';">اتصل بنا</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <button class="button-up"><span><i class="fa-solid fa-arrow-up fa-lg"></i></span></button>
      <p class="alert1"></p>
      <div class="container">
        <main>
          <h1 class="title-element">${bookName}</h1>
          <div class="book-details">
            <div class="book">
              <img src="../../Images/Book Covers/${bookName}.webp" alt="Book Title">
              <div class="book-informations">
                <h3 class="auther">تأليف : <button onclick="location.href = '../Authors/${authorName}'" class="auther-name" style="scroll-behavior: smooth;">${authorName}</button></h3>
                <h3 class="publish-year">تم نشر الكتاب عام : <strong>${publishYear}</strong></h3>
                <div class="sort">
                  <div class="sorts">
                    <a href="#" class="book-sort sort1">${sort1}</a>
                    <a href="#" class="book-sort sort2">${sort2}</a>
                    <a href="#" class="book-sort sort3">${sort3}</a>
                  </div>
                  <button class="favorite" style="color: black;">
                    <p>إضافة إلى المفضلة </p>
                    <i class="fa-regular fa-star"></i>
                  </button>  
                </div>
                <br>
                <h4 class="special-h4">تفاصيل الكتاب</h4>
                <p class="description">${bookContent}</p>
                <div class="buttons-container" id="buttonContainer">
                <a href="../../PDF/${bookName}.pdf" download="${bookName}.pdf" class="download-button"
                onclick="downloadBook()">
                <div class="white" id="white">تحميل الكتاب</div>
                <div class="loading-circle" id="loading-circle"></div>
              </a>
                  <button onclick="window.location.href='../page/library.html'" class=" back-button" id="back-button">عودة
                    إلى المكتبة</button>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      </main>
      </div>
      <footer>
        <script src="../../Scripts/Animations/showParagraph.js" defer></script>
        <script src="https://kit.fontawesome.com/e2c8963695.js" crossorigin="anonymous"></script>
        <script src="../../Scripts/Animations/landing-page.js"></script>
        <script src="../../Scripts/Animations/sideBar.js"></script>
        <script src="../../Scripts/Animations/book.js"></script>
        <script src="../../Scripts/Home/favorite.js"></script>
        <script src="../../Scripts/Animations/declareTitle.js"></script>
      </footer>
    </body>
    
    </html>
    `;

  // Create a Blob (Binary Large Object) from the HTML content
  const blob = new Blob([htmlContent], { type: 'text/html' });

  // Create a link element to trigger the download
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${bookName}.html`;

  // Append the link to the document and trigger the click event
  document.body.appendChild(a);
  a.click();

  // Remove the link from the document
  document.body.removeChild(a);
}
document.addEventListener("DOMContentLoaded", function () {
  const password = localStorage.getItem('password');
  const email = localStorage.getItem('email');
  const username = localStorage.getItem('username');
  const form = document.querySelector('form');
  form.style.display = 'none';
  if (email === 'admin@1' && password === 'yha232008' && username === 'admin') {
    form.style.display = 'block';
  }
})