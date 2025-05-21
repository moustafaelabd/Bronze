document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  if (slider && prevBtn && nextBtn) {
    const card = document.querySelector(".facility-card");
    const cardWidth = card ? card.offsetWidth + 20 : 300; // لو مش لاقي البطاقة افترض 300

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    });
  }

  // تعيين جميع عناصر الـ dropdown
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(drop => {
    drop.addEventListener('click', (e) => {
      e.stopPropagation();
      drop.classList.toggle('active');
    });
  });

  // هنا نصحح اختيار navLinks من class مش id
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      toggle.classList.toggle('active');
    });
  }
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
