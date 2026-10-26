const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);

  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  window.scrollTo(0, 0);
  
  navMenu.setAttribute("aria-hidden", isExpanded);
  overlay.setAttribute("aria-hidden", isExpanded);

  navMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  document.body.classList.toggle("overflow-hidden");
});

overlay.addEventListener("click", () => {
  openIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  
  menuButton.setAttribute("aria-expanded", "false");
  navMenu.setAttribute("aria-hidden", "true");
  overlay.setAttribute("aria-hidden", "true");

  navMenu.classList.add("hidden");
  overlay.classList.add("hidden");

  document.body.classList.remove("overflow-hidden");
});
