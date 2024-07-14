/**
 * Define Global Variables
 */
const sections = document.querySelectorAll('section');
let navLinks = '';

/**
 * Helper Functions
 */
function makeActive() {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sec = section.getBoundingClientRect();
        if (sec.top <= window.innerHeight / 2 && sec.bottom >= window.innerHeight / 2) {
            section.classList.add('your-active-class');
            links[i].classList.add('active'); // Add active class to the nav link
        } else {
            section.classList.remove('your-active-class');
            links[i].classList.remove('active'); // Remove active class from the nav link
        }
    }
}

/**
 * Main Functions
 */

// Build the navigation
for (let i = 0; i < sections.length; i++) {
    navLinks += `<li><a class="menu__link" href="#section${i+1}">Section ${i+1}</a></li>`;
}
document.querySelector("#navbar__list").innerHTML = navLinks;

// Select navigation links after they have been added to the DOM
const navLinksElements = document.querySelectorAll('.menu__link');
let links = Array.from(navLinksElements);

/**
 * Events
 */

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', makeActive);

// Scroll to anchor ID using scrollIntoView event
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
        e.preventDefault();
        const sectionId = links[i].getAttribute("href");
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Toggle read more/less content
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        if (buttons[i].textContent == "Read More") {
            buttons[i].previousElementSibling.classList.remove("readMore");
            buttons[i].textContent = "Read Less";
        } else {
            buttons[i].previousElementSibling.classList.add("readMore");
            buttons[i].textContent = "Read More";
        }
    };
}
