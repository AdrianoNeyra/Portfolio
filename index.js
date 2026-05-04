const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll');
        }
    });
}, { threshold: 0.1 }); // Se activa cuando el 10% de la sección es visible

const hiddenElements = document.querySelectorAll('.hidden-scroll');
hiddenElements.forEach((el) => observer.observe(el));

// TEMAS
const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const currentTheme = localStorage.getItem("theme");

// Si ya había una preferencia guardada, la aplicamos
if (currentTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}

btn.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  
  if (theme === "light") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
  }
});