
//index 
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  if (index >= items.length) currentIndex = 0;
  if (index < 0) currentIndex = items.length - 1;

  const newTransform = -currentIndex * 100 + "%";
  document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform})`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

function toggleMensagem(index) {
  const mensagens = document.querySelectorAll('.mensagem-detalhada');
  mensagens.forEach((msg, i) => {
    if (i === index) {
      msg.classList.toggle('ativa');
      msg.classList.toggle('oculto');
    } else {
      msg.classList.remove('ativa');
      msg.classList.add('oculto');
    }
  });
}

// Menu interativo
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuPanel = document.getElementById('menuPanel');

menuToggle.addEventListener('click', () => {
  menuOverlay.style.display = 'block';
  menuPanel.style.right = '0';
});

menuOverlay.addEventListener('click', () => {
  menuOverlay.style.display = 'none';
  menuPanel.style.right = '-260px';
});

function redirecionarParaConfiguracoes() {
    window.location.href = 'intent://#Intent;action=android.settings.APPLICATION_DETAILS_SETTINGS;scheme=package;package=com.seuapp.pacote;end';
}

    function aceitarTermos() {
      localStorage.setItem("termosAceitos", "true");
      window.location.href = "inicio.html"; // vá para a tela inicial ou dashboard
    }