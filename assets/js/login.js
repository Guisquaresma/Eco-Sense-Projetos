

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
function toggleSenha() {
    const input = document.getElementById('senhaInput');
    const icon = document.getElementById('toggleSenhaIcon');

    if (input.type === 'password') {
        input.type = 'text';
        icon.src = 'eye-off-icon.png'; // troca para ícone de "ocultar"
    } else {
        input.type = 'password';
        icon.src = 'eye-icon.png'; // volta para ícone de "ver"
    }
}

// Referências aos elementos
const senhaInput = document.getElementById('senha');
const toggleSenha = document.getElementById('toggleSenha');

// Evento de clique para alternar entre mostrar e esconder a senha
toggleSenha.addEventListener('click', () => {
  // Verifica o tipo atual de campo e alterna
  if (senhaInput.type === 'password') {
    senhaInput.type = 'text'; // Mostra a senha
    toggleSenha.src = "assets/img/eye-open.png"; // Ícone de olho aberto
  } else {
    senhaInput.type = 'password'; // Esconde a senha
    toggleSenha.src = "assets/img/eye-closed.png"; // Ícone de olho fechado
  }
});

localStorage.removeItem("termosAceitos");

