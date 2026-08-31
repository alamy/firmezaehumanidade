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
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });

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
