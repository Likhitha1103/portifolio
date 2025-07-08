// JavaScript for smooth animations and interactivity

document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal effect
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.1,
  };

  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealSection, options);

  sections.forEach((section) => {
    section.classList.add("reveal-hidden");
    observer.observe(section);
  });

  // Alert on contact click
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been received.");
      contactForm.reset();
    });
  }
});
