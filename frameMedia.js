// Toggle navigation menu and initialize Swiper sliders

// Toggle menu in mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Swiper for Services
const servicesSwiper = new Swiper('.services-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.services-slider .swiper-button-next',
    prevEl: '.services-slider .swiper-button-prev',
  },
  pagination: {
    el: '.services-slider .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Swiper for Gallery
const gallerySwiper = new Swiper('.gallery-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.gallery-slider .swiper-button-next',
    prevEl: '.gallery-slider .swiper-button-prev',
  },
  pagination: {
    el: '.gallery-slider .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', function () {
  const elementsToAnimate = document.querySelectorAll(
    'section, .card, .photo-item',
  );
  elementsToAnimate.forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

const form = document.getElementById('enquiryForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        successMessage.style.display = 'block';
      } else {
        alert('❌ Something went wrong. Please try again.');
      }
    })
    .catch((error) => {
      alert('❌ Error: ' + error.message);
    });
});
