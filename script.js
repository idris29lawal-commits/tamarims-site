const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

const heroSlides = document.querySelectorAll(".hero-slide");
let currentHeroSlide = 0;

if (heroSlides.length > 1) {
  setInterval(() => {
    heroSlides[currentHeroSlide].classList.remove("active");

    currentHeroSlide = currentHeroSlide + 1;

    if (currentHeroSlide >= heroSlides.length) {
      currentHeroSlide = 0;
    }

    heroSlides[currentHeroSlide].classList.add("active");
  }, 3000);
}
(() => {
  const slides = document.querySelectorAll(".tamarims-gallery-slide");
  const dots = document.querySelectorAll(".tamarims-gallery-dot");
  const previousButton = document.querySelector(".tamarims-gallery-control.previous");
  const nextButton = document.querySelector(".tamarims-gallery-control.next");

  if (!slides.length) return;

  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide]?.classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide]?.classList.add("active");
  }

  function showNextSlide() {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }

  function showPreviousSlide() {
    const previousSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(previousSlide);
  }

  nextButton?.addEventListener("click", showNextSlide);
  previousButton?.addEventListener("click", showPreviousSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  setInterval(showNextSlide, 4500);
})();