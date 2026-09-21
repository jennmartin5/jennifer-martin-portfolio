document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section[id]");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (nav) nav.classList.remove("open");
    if (menuButton) menuButton.setAttribute("aria-expanded", "false");
  });
});

function updateActiveNav() {
  let currentSection = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

/* =========================================
   ONBOARDING CAROUSEL
   ========================================= */

const onboardingCarousel = document.querySelector('.onboarding-carousel');

if (onboardingCarousel) {

  const slides = onboardingCarousel.querySelectorAll('.onboarding-slide');
  const prevButton = onboardingCarousel.querySelector('.onboarding-prev');
  const nextButton = onboardingCarousel.querySelector('.onboarding-next');
  const currentCounter = onboardingCarousel.querySelector('.onboarding-current');

  let currentSlide = 0;

  function showOnboardingSlide(index) {

    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    slides[index].classList.add('active');

    currentCounter.textContent = index + 1;
  }

  nextButton.addEventListener('click', () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showOnboardingSlide(currentSlide);
  });

  prevButton.addEventListener('click', () => {

    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    showOnboardingSlide(currentSlide);
  });

}

/* =========================================
   ONBOARDING CASE STUDY INTERACTIONS
   ========================================= */


/* 7-STEP PRODUCT TOUR */

const tourTabs = document.querySelectorAll('.tour-tab');
const tourScreens = document.querySelectorAll('.tour-screen');

tourTabs.forEach((tab, index) => {

  tab.addEventListener('click', () => {

    tourTabs.forEach((item) => {
      item.classList.remove('active');
    });

    tourScreens.forEach((screen) => {
      screen.classList.remove('active');
    });

    tab.classList.add('active');
    tourScreens[index].classList.add('active');

  });

});


/* HELP & RESOURCES TABS */

const resourceTabs = document.querySelectorAll('.resource-tab');
const resourceScreens = document.querySelectorAll('.resource-screen');

resourceTabs.forEach((tab, index) => {

  tab.addEventListener('click', () => {

    resourceTabs.forEach((item) => {
      item.classList.remove('active');
    });

    resourceScreens.forEach((screen) => {
      screen.classList.remove('active');
    });

    tab.classList.add('active');
    resourceScreens[index].classList.add('active');

  });

});

/* =========================================
   INTERACTIVE KITTY
   ========================================= */

const portfolioKitty = document.getElementById("portfolioKitty");
const kittyImage = document.getElementById("kittyImage");
const kittyBowl = document.getElementById("kittyBowl");
const kittyFeedPrompt = document.getElementById("kittyFeedPrompt");

if (portfolioKitty && kittyImage && kittyBowl) {

  let kittyState = "idle";

  // Click the bowl → kitty eats
  kittyBowl.addEventListener("click", (event) => {
    event.stopPropagation();

    if (kittyState !== "idle") return;

    kittyState = "eating";

    kittyImage.src = "assets/kitty-eat.png";

    if (kittyFeedPrompt) {
      kittyFeedPrompt.classList.add("hidden");
    }
  });

  // After feeding, click the kitty → happy kitty
  kittyImage.addEventListener("click", () => {

    if (kittyState !== "eating") return;

    kittyState = "happy";
    kittyImage.src = "assets/kitty-happy.png";
  });

}
