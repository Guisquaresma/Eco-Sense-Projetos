function mostrarTermos() {
  const aceitou = localStorage.getItem("termosAceitos") === "true";
  if (aceitou) {
    window.location.href = "inicio.html";
  } else {
    document.getElementById("modalTermos").style.display = "flex";
  }
}

function aceitarTermos() {
  localStorage.setItem("termosAceitos", "true");
  document.getElementById("modalTermos").style.display = "none";
  window.location.href = "inicio.html";
}

function fecharModal() {
  alert("Você precisa aceitar os termos para continuar.");
}
