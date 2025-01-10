// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

// Check if the user previously set a theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    themeToggle.textContent = currentTheme === 'dark-mode' ? '🌙 Dark Mode' : '🌞 Light Mode';
}

// Toggle the theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark-mode' ? '🌙 Dark Mode' : '🌞 Light Mode';
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu on hamburger button click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function downloadCV() {
    window.open('./assets/images/Baxter_Janel-Resume.pdf.pdf', '_blank');
  }
  function openLinkedln() {
    window.open("https://www.linkedin.com/in/janel-baxter-5a0b8b260/", "_blank");
  }

  function openGithub() {
    window.open("https://github.com/Matalon03", "_blank");
  }
