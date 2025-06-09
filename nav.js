document.addEventListener("DOMContentLoaded", () => {
  // Navigation elements
  const hamburger = document.querySelector(".hamburger");
  const navLinksWrapper = document.querySelector(".nav-links-wrapper");
  const navLinks = navLinksWrapper.querySelectorAll("a");
  const currentPath = window.location.pathname;

  // Mobile menu toggle
  function toggleMenu(show = true) {
    if (show) {
      hamburger.classList.toggle("active");
      navLinksWrapper.classList.toggle("active");
      document.body.classList.toggle("menu-active");
      document.body.style.overflow = navLinksWrapper.classList.contains(
        "active"
      )
        ? "hidden"
        : "";
    } else {
      hamburger.classList.remove("active");
      navLinksWrapper.classList.remove("active");
      document.body.classList.remove("menu-active");
      document.body.style.overflow = "";
    }
  }

  // Set active navigation link
  function setActiveNavLink() {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      const linkPath = new URL(link.href).pathname;

      if (
        currentPath === linkPath ||
        (currentPath === "/" && linkPath.endsWith("index.html")) ||
        (currentPath === "/index.html" && link.getAttribute("href") === "#")
      ) {
        link.classList.add("active");
      }
    });
  }

  // Event Listeners
  hamburger.addEventListener("click", () => toggleMenu());

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinksWrapper.contains(e.target)) {
      toggleMenu(false);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setActiveNavLink();
      toggleMenu(false);
    });
  });

  // Initialize active link
  setActiveNavLink();
});
