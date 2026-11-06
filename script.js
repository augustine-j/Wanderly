const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');
const homeLinks = document.querySelectorAll('a[href="#home"]');
const header = document.querySelector('.site-header');
const tripForm = document.querySelector('#trip-form');
const formFeedback = document.querySelector('#form-feedback');

// Add a background to the fixed header after the page starts scrolling.
function updateHeaderStyle() {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}

window.addEventListener('scroll', updateHeaderStyle);
updateHeaderStyle();

// Toggle the mobile navigation menu.
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

// Close the mobile menu after a navigation link is selected.
navLinks.forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
}));

// Scroll Home links to the very top of the page.
homeLinks.forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}));

// Show a front-end confirmation when the trip form is submitted.
tripForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(tripForm).get('name').trim();
  formFeedback.textContent = `Thanks, ${name}. Your travel idea is ready to discuss!`;
  tripForm.reset();
});
