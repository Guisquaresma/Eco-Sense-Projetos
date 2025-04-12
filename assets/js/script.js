
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
