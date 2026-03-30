// script.js
console.log("JS is connected! 🚀");

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  // Check if body currently has the 'dark' theme
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  
  // Flip the attribute
  document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  
  // Update button text so the user knows what happened
  themeToggle.textContent = isDark ? '🌙 Dark Mode' : '☀️ Light Mode';
});