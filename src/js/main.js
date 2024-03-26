// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(
  `.hero-title, .title, .customer-bottom, .hero-video, .subtext, .review`,
  {
    delay: 600,
  }
);

sr.reveal(`.hero-text, .cta`, { delay: 600 });

sr.reveal(` .customer-top, .plan-type-btn-container`, {
  delay: 900,
  origin: "top",
});
sr.reveal(` .slider-container`, { origin: "top", interval: 100 });
sr.reveal(
  `.card, .plan-details, .get-started-form-input, .steps-mobile-img, .steps-desktop-img`,
  { origin: "left", interval: 100 }
);
sr.reveal(` .laptop, signup-process-details, .get-started-img, .phone`, {
  right: "top",
  interval: 100,
});
