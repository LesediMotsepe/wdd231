// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("menu");

  if (toggleButton && navMenu) {
    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("show"); // Add or remove the 'show' class
    });
  }
});
