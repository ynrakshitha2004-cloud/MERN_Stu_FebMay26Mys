const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // offset for navbar
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-600");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("text-blue-600");
    }
  });
});