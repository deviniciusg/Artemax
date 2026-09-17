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
