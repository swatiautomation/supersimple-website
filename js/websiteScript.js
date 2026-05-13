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
  document.querySelectorAll(".card, .photo-item, .stat-item, .faq-item, .testimonial-card, .contact-detail, .about-container").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});

// ── Custom lightbox (works on any page with data-lb links) ──
const glModal = document.getElementById("galleryModal");
if (glModal) {
  const glImg     = glModal.querySelector(".gl-img");
  const glCaption = glModal.querySelector(".gl-caption");
  const glClose   = glModal.querySelector(".gl-close");
  const glPrev    = glModal.querySelector(".gl-prev");
  const glNext    = glModal.querySelector(".gl-next");
  let currentSrc  = "";

  // Only include links that are not inside a hidden filtered item
  const visibleLinks = () => [...document.querySelectorAll("a[data-lb]")].filter(a => {
    const item = a.closest(".gallery-grid-item");
    return !item || !item.classList.contains("hidden");
  });

  function openModal(src, title) {
    currentSrc = src;
    glImg.src = src;
    glImg.alt = title || "";
    glCaption.textContent = title || "";
    glModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    glModal.classList.remove("open");
    glImg.src = "";
    document.body.style.overflow = "";
  }

  function navigate(dir) {
    const links   = visibleLinks();
    const filename = currentSrc.split("/").pop();
    const idx     = links.findIndex(a => a.href.split("/").pop() === filename);
    const next    = links[(idx + dir + links.length) % links.length];
    if (next) openModal(next.href, next.dataset.title);
  }

  document.querySelectorAll("a[data-lb]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const item = link.closest(".gallery-grid-item");
      if (!item || !item.classList.contains("hidden")) {
        openModal(link.href, link.dataset.title);
      }
    });
  });

  glClose.addEventListener("click", closeModal);
  glModal.addEventListener("click", e => { if (e.target === glModal) closeModal(); });
  glPrev.addEventListener("click",  () => navigate(-1));
  glNext.addEventListener("click",  () => navigate(1));

  document.addEventListener("keydown", e => {
    if (!glModal.classList.contains("open")) return;
    if (e.key === "Escape")     closeModal();
    if (e.key === "ArrowLeft")  navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });
}

// ── Gallery filter ──
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-grid-item");
const galleryEmpty = document.querySelector(".gallery-empty");

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      let visible = 0;

      galleryItems.forEach(item => {
        const match = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("hidden", !match);
        if (match) visible++;
      });

      if (galleryEmpty) galleryEmpty.style.display = visible === 0 ? "block" : "none";
    });
  });
}

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
