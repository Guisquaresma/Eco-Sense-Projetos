

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

// Login 

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const msgErro = document.getElementById('mensagem-erro');

  msgErro.textContent = ''; // Limpa mensagem anterior

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (email === '' || senha === '') {
    msgErro.textContent = 'Preencha todos os campos obrigatórios.';
    return;
  }

  if (!emailValido) {
    msgErro.textContent = 'Insira um e-mail válido.';
    return;
  }

  if (senha.length <= 6) {
    msgErro.textContent = 'A senha deve conter mais de 6 caracteres.';
    return;
  }

  // Redireciona se tudo estiver válido
  window.location.href = 'inicio.html';
});


localStorage.removeItem("termosAceitos");

