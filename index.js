const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll('.nav-links a');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', navLinks.classList.contains('active'));
  });

  navLinksList.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    galleryItems.forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hide', !show);
    });
  });
});

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const lightboxClose = document.querySelector('.lightbox-close');

if (lightbox && lightboxImg && lightboxClose) {
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      lightbox.classList.add('show');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('show');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('show')) closeLightbox();
  });
}
