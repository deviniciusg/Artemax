const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const feedback = document.querySelector('.form-feedback');
  feedback.textContent = 'Mensagem pronta para ser enviada. Entraremos em contato em breve.';
  event.target.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", () => {
  // Configuração do Scroll Reveal via IntersectionObserver
  const revealElements = document.querySelectorAll(".reveal");

  const observerOptions = {
    threshold: 0.12, // Dispara quando 12% do elemento entra na tela
    rootMargin: "0px 0px -40px 0px" // Pequena folga na base
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Anima uma única vez
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));
});