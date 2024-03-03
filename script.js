// Function to show/hide the menu
function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show-menu');
}

// Function to set active link and close the menu
function setActiveLink(element) {
  const linkColor = document.querySelectorAll('.nav_link');
  linkColor.forEach((l) => l.classList.remove('active'));
  element.classList.add('active');

  // Close the menu when a link is clicked
  const nav = document.getElementById('navbar');
  nav.classList.remove('show-menu');
}
