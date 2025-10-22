// Dark/Light Mode
const toggleDark = document.querySelector(".toggle-dark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark-mode");

// Typewriter Effect
const typewriter = document.querySelector(".typewriter");
const text = typewriter.textContent;
typewriter.textContent = "";
let i = 0;
function typing() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// Contact Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});

// Scroll Progress Bar
const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

// Scroll Animations
const observer = new IntersectionObserver(
  (entries) => { entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("visible"); }); },
  { threshold: 0.2 }
);
document.querySelectorAll("section, .project-card, .skill").forEach(el => { el.classList.add("fade-in"); observer.observe(el); });

// Active Navbar Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) current = section.getAttribute("id");
  });
  navLinks.forEach(link => { link.classList.remove("active"); if(link.getAttribute("href").includes(current)) link.classList.add("active"); });
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => { backToTop.style.display = window.scrollY > 300 ? "block" : "none"; });
backToTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });

// Hamburger Menu Toggle with Overlay
const hamburger = document.querySelector(".hamburger");
const navLinksMenu = document.querySelector(".nav-links");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");   
  navLinksMenu.classList.toggle("active"); 
  overlay.classList.toggle("active");      
});
navLinksMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinksMenu.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
  });
});
overlay.addEventListener("click", () => {
  navLinksMenu.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
});
