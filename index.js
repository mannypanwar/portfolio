gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar-brand, .nav-list", {
  duration: 1.5,
  opacity: 0,
  scale: 0.3,
  ease: "back",
  delay: 0.5,
});

gsap.to(".hero", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    // end: "bottom center",
    scrub: true,
  },
});

gsap.to([".p-Text", ".p-projects"], {
  opacity: 0,
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top top",
    // end: "bottom center",
    scrub: true,
  },
});
gsap.to([".blog-Text", ".blog-list"], {
  opacity: 0,
  scrollTrigger: {
    trigger: ".blog",
    start: "top top",
    // end: "bottom center",
    scrub: true,
  },
});
