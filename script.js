// Simple fade-in animation on scroll
const products = document.querySelectorAll('.product');
const revealOnScroll = () => {
  products.forEach(p => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      p.style.opacity = 1;
      p.style.transform = "translateY(0)";
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Initial hidden style
products.forEach(p => {
  p.style.opacity = 0;
  p.style.transform = "translateY(50px)";
  p.style.transition = "all 0.8s ease-out";
});
