// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Get elements by their IDs
const settingsIcon = document.getElementById('settings-icon');
const settingsMenu = document.getElementById('settings-menu');
const changeThemeOption = document.getElementById('change-theme');

// Function to toggle the settings menu visibility
settingsIcon.addEventListener('click', function () {
  if (settingsMenu.style.display === "block") {
      settingsMenu.style.display = "none";
  } else {
      settingsMenu.style.display = "block";
  }
});

// Toggle the theme between light and dark
changeThemeOption.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  saveThemePreference();
});

// Save the theme preference to localStorage
function saveThemePreference() {
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Load the theme from localStorage (if any) when the page is loaded
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
  }
}

// Load theme preference on page load
window.addEventListener('load', loadThemePreference);

// Optional: Click outside to close the settings menu
document.addEventListener('click', function (event) {
  if (!settingsIcon.contains(event.target) && !settingsMenu.contains(event.target)) {
      settingsMenu.style.display = "none";
  }
});

function account() {
  // Show a confirmation dialog
  const confirmLogout = confirm("Do you want to Register as Seller?");
  
  if (confirmLogout) {
      // Perform logout actions here, e.g., clearing user session data
      
      // Redirect to the login page (assuming login.html is your login page)
      window.location.href = "Seller.html";
  }
}

function logout() {
  // Show a confirmation dialog
  const confirmLogout = confirm("Are you sure you want to log out?");
  
  if (confirmLogout) {
      // Perform logout actions here, e.g., clearing user session data
      
      // Redirect to the login page (assuming login.html is your login page)
      window.location.href = "login.html";
  }
}

// Show/Hide "Back to Top" Button
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.display = 'block';
  } else {
      backToTopBtn.style.display = 'none';
  }
};

// Scroll Back to Top
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
