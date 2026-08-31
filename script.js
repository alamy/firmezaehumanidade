(function () {
  const toggleButton = document.querySelector('.nav-toggle');
  const nav = document.getElementById('siteNav');
  const navLinks = document.querySelectorAll('.site-nav a');

  if (toggleButton && nav) {
    toggleButton.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggleButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.slider-btn.prev');
  const nextButton = document.querySelector('.slider-btn.next');
  let currentSlide = 0;
  let autoRotate;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === currentSlide);
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === currentSlide);
    });
  }

  function goToNextSlide() {
    showSlide(currentSlide + 1);
  }

  function startAutoRotate() {
    autoRotate = setInterval(goToNextSlide, 5000);
  }

  if (slides.length > 0) {
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        showSlide(index);
        clearInterval(autoRotate);
        startAutoRotate();
      });
    });

    if (prevButton) {
      prevButton.addEventListener('click', function () {
        showSlide(currentSlide - 1);
        clearInterval(autoRotate);
        startAutoRotate();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        showSlide(currentSlide + 1);
        clearInterval(autoRotate);
        startAutoRotate();
      });
    }

    startAutoRotate();
  }

  const yearElement = document.getElementById('anoAtual');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const formContato = document.getElementById('formContato');
  if (formContato) {
    formContato.addEventListener('submit', function (event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (!nome || !mensagem) {
        alert('Por favor, preencha seu nome e sua mensagem.');
        return;
      }

      const textoFormatado = `Olá! Meu nome é ${nome}. ${mensagem}`;
      const urlWhatsApp = `https://wa.me/558187251498?text=${encodeURIComponent(textoFormatado)}`;

      window.open(urlWhatsApp, '_blank');
      this.reset();
    });
  }
})();
