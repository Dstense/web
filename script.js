const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const year = document.getElementById("year");
const cursorGlow = document.querySelector(".cursor-glow");

year.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("mousemove", e => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const heroVisual = document.querySelector(".hero-visual");
heroVisual?.addEventListener("mousemove", e => {
  const rect = heroVisual.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  const card = heroVisual.querySelector(".website-card");
  if (card) {
    card.style.transform = `perspective(1200px) rotateY(${x * -12}deg) rotateX(${y * 8}deg)`;
  }
});
heroVisual?.addEventListener("mouseleave", () => {
  const card = heroVisual.querySelector(".website-card");
  if (card) {
    card.style.transform = "perspective(1200px) rotateY(-8deg) rotateX(5deg)";
  }
});
