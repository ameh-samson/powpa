// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.hero-title, .title, .customer-bottom, .hero-video,`, {
  delay: 600,
});

sr.reveal(`.hero-text, .cta`, { delay: 700 });

sr.reveal(` .customer-top`, { delay: 900, origin: "top" });
