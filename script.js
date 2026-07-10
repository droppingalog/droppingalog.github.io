// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Gentle reveal for episode cards as they scroll into view
const episodes = document.querySelectorAll(".episode");

if ("IntersectionObserver" in window && episodes.length) {
  episodes.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  episodes.forEach(el => observer.observe(el));
}
