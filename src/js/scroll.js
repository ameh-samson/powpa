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
sr.reveal(` .steps-desktop-img, .steps-mobile-img `, {
  origin: "bottom",
  interval: 100,
});

sr.reveal(
  `.card, .plan-details-container, .get-started-form-input, .get-started-img, .each-customer-review-container`,
  { origin: "left", interval: 100 }
);

sr.reveal(` .laptop, signup-process-details, .phone, .slider-container`, {
  right: "top",
  interval: 100,
});
