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

// THE CORE VISION MISSION IN THE ABOUT SECTION PICTURES SLIDES IN 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".belief-each");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
             profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});


// **********************************************************************************