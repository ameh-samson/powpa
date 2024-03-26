// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(
  `.hero-title, .title, .customer-bottom, .hero-video, .subtext, .plan-type-btn-container, .review`,
  { delay: 600 }
);

sr.reveal(`.hero-text, .cta`, { delay: 600 });

sr.reveal(` .customer-top`, {
  delay: 900,
  origin: "top",
});
sr.reveal(` .slider-container`, { origin: "top", interval: 100 });
sr.reveal(
  `.card, .plan-details-container, .get-started-form-input, .get-started-img, .steps-mobile-img, .steps-desktop-img, .each-customer-review-container`,
  { origin: "left", interval: 100 }
);
sr.reveal(` .laptop, signup-process-details, .phone`, {
  right: "top",
  interval: 100,
});
