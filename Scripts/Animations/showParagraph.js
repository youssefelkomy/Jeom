function toggleParagraph(paragraphId, buttonId) {
    var paragraph = document.getElementById(paragraphId);
    var button = document.getElementById(buttonId);
  
    paragraph.classList.toggle("paragraph-hidden");
    paragraph.classList.toggle("paragraph-visible");
    button.classList.toggle("rotate-arrow-icon");
  }
  