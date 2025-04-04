// Typewriter Effect
const text1 = "THE PETERSTOUCH MERCHANTS";
const text2 = "Your trusted partner for state-of-the-art LED Displays, cutting-edge audio-visual solutions, impactful publicity equipments.";

const typingSpeed = 75;
let i = 0;
let j = 0;

function typeWriter1() {
  const textElement1 = document.getElementById("text");
  if (i < text1.length) {
    textElement1.textContent += text1.charAt(i);
    i++;
    setTimeout(typeWriter1, typingSpeed);
  } else {
    setTimeout(typeWriter2, 450); // Delay before starting the second typewriter
  }
}

function typeWriter2() {
  const textElement2 = document.getElementById("desc");
  if (j < text2.length) {
    textElement2.textContent += text2.charAt(j);
    j++;
    setTimeout(typeWriter2, typingSpeed);
  }
}

// Background Image Rotator
const backgroundImages = [
  "./backgrdimg/client2.jpg",
  "./backgrdimg/backgrd.jpg",
  "./backgrdimg/ptrninstlr.jpg",
  "./backgrdimg/conf-seat.jpg",
  "./backgrdimg/scrnguyyelow.jpg",
  "./backgrdimg/mic-conf.jpg"
  
];

let currentImageIndex = 0;

function rotateBackground() {
  const homeSection = document.getElementById("home");
  homeSection.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length; // Loop through images
}

window.onload = () => {
  typeWriter1();
  rotateBackground();
  setInterval(rotateBackground, 3000); // Change background every 5 seconds
};

// ************************************************************************

// ***************************************************************

// COMPANY LOGO APPEARS ON Slide in TO THE POINT 

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".slide-in-image");

  function handleScroll() {
      const imageRect = image.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the image is in the viewport
      if (imageRect.top < windowHeight && imageRect.bottom > 0) {
          image.classList.add("visible");
      } 
      // Remove 'visible' class only when the image is completely out of view
      else if (imageRect.bottom <= 0 || imageRect.top >= windowHeight) {
          image.classList.remove("visible");
      }
  }

  window.addEventListener("scroll", handleScroll);
});

// *********************************************************************************
// Select all boxes
const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('reset'); // Ensure reset isn't applied during visibility
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('reset'); // Reset state when scrolled out
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the box is visible
      }
    );

    // Observe each box
    boxes.forEach((box) => observer.observe(box));