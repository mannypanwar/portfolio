gsap.registerPlugin(ScrollTrigger);

gsap.from("body", {
  backgroundColor: "#fff",
  opacity: 0,
  duration: 0.5,
  ease: "none",
});

gsap.from(".navbar-brand, .nav-list", {
  duration: 3,
  opacity: 0,
  scale: 0.3,
  ease: "back",
  delay: 0.5,
});
