window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

// ── Hero mobile menu toggle ──
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ── Sticky header: show after scrolling past hero ──
const stickyHeader = document.getElementById("stickyHeader");
const hero = document.querySelector(".hero");

if (stickyHeader && hero) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > hero.offsetHeight - 80) {
      stickyHeader.classList.add("visible");
    } else {
      stickyHeader.classList.remove("visible");
    }
  });
}

// ── Sticky header mobile menu toggle ──
const stickyToggle = document.querySelector(".sticky-menu-toggle");
const stickyLinks = document.querySelector(".sticky-nav-links");
if (stickyToggle && stickyLinks) {
  stickyToggle.addEventListener("click", () => {
    stickyLinks.classList.toggle("show");
  });
}

// ── Swiper for Services (home page only) ──
if (document.querySelector(".services-slider")) {
  new Swiper(".services-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".services-slider .swiper-button-next",
      prevEl: ".services-slider .swiper-button-prev",
    },
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

// ── Swiper for Testimonials ──
if (document.querySelector(".testimonials-slider")) {
  new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: { delay: 4500, disableOnInteraction: false },
    navigation: {
      nextEl: ".testimonials-slider .swiper-button-next",
      prevEl: ".testimonials-slider .swiper-button-prev",
    },
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

// ── Swiper for Gallery (home page only) ──
if (document.querySelector(".gallery-slider")) {
  new Swiper(".gallery-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".gallery-slider .swiper-button-next",
      prevEl: ".gallery-slider .swiper-button-prev",
    },
    pagination: {
      el: ".gallery-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

// ── Scroll fade-in animations ──
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("section, .card, .photo-item, .stat-item, .faq-item").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});

// ── Stats counter animation ──
const statNumbers = document.querySelectorAll(".stat-number");
if (statNumbers.length > 0) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.target.textContent = Math.floor(current);
        }, 16);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => statsObserver.observe(num));
}

// ── FAQ Accordion ──
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  if (question) {
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach(i => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  }
});

// ── Enquiry form submission ──
const form = document.getElementById("enquiryForm");
const successMessage = document.getElementById("successMessage");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    }).then(response => {
      if (response.ok) {
        form.reset();
        successMessage.style.display = "block";
      } else {
        alert("Something went wrong. Please try again.");
      }
    }).catch(error => {
      alert("Error: " + error.message);
    });
  });
}
