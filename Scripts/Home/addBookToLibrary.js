function generateBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const htmlContent = `
  <button class="book book-link" onclick="location.href='../book/${bookName}.html'">
    <a href="../book/${bookName}.html">
      <img src="../../Images/Book Covers/${bookName}.webp" alt="غلاف الكتاب" class="book-img">
      <h3>${bookName}</h3>
      <a href='../Authors/${authorName}.html' class='author-link'>${authorName}</a>
    </a>
  </button>
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