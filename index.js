const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
navLinksList.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    })
});

const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));