

const text = "THE PETERSTOUCH MERCHANTS"; // The text to display
const typingSpeed = 80; // Typing speed in milliseconds

let i = 0;

function typeWriter() {
  const textElement = document.getElementById("text");
  if (i < text.length) {
    textElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}

window.onload = typeWriter;


// ^^^^^^^^^^***************************************************************
