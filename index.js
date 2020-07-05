gsap.from(".navbar-brand, .nav-list", {
  duration: 1.5,
  opacity: 0,
  scale: 0.3,
  ease: "back",
  delay: 0.5,
});

document
  .querySelector(".submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
