
// CURRENT MENU SECTION TO BE ACTIVELY UNDERLINED
// CURRENT MENU SECTION TO BE ACTIVELY UNDERLINED

const sections = document.querySelectorAll('section'); // Select all sections
const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links

// Function to remove active class from all nav links
function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('active'));
}

// Function to add active class to the current menu
function addActiveLink(currentId) {
  removeActiveClasses(); // First, clear all 'active' classes
  const currentLink = document.querySelector(`.nav-link[href="#${currentId}"]`);
  if (currentLink) {
    currentLink.classList.add('active');
  }
}

// Intersection Observer to track sections on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3, // Trigger when 30% of the section is visible
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentId = entry.target.getAttribute('id');
      addActiveLink(currentId);
    }
  });
}, observerOptions);

// Observe each section
sections.forEach(section => observer.observe(section));

// Add click event listeners to menu items for instant underline
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href').substring(1);
    addActiveLink(targetId);
  });
});


// ***********************************************************************
// COMPANY NAME TYPEWRITER 

const text = "THE PETERSTOUCH MERCHANT"; // The text to display
const typingSpeed = 90; // Typing speed in milliseconds

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
// COMPANY DESC TYPEWRITER 

// const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente repudiandae unde repellat, quia odio maximenumquam exercitationem temporibus pariatur architecto quas, "
// const typSpd = 60;

// let k = 0;

// function typist() {
//   if (k < desc.length) {
//     document.getElementById("desc").descContent += desc.charAt(k);
//     k++;
//     setTimeout(typist, typSpd);
//   }
// }

// window.onload = typist;