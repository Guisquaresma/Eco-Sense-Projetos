const mensagens = [
  {
    titulo: "Vazamento no banheiro da suíte",
    texto: `
    Olá, Detectamos um vazamento de água no banheiro da suíte.

    1. Identifique a fonte: verifique o local indicado.
    2. Desligue a água: feche o registro local.
    3. Inspecione: observe torneiras, válvulas, ralos.
    4. Acione suporte técnico se necessário.

    Equipe Eco'Sense 💧
    `
  },
  {
    titulo: "Vazamento de gás na cozinha",
    texto: `
    Alerta de vazamento de gás na cozinha!

    1. Não acenda luzes.
    2. Abra janelas.
    3. Verifique a válvula ou botijão.
    4. Acione suporte técnico imediatamente.

    Segurança em primeiro lugar! 🔥
    `
  },
  {
    titulo: "Vazamento na área de serviço",
    texto: `
    Eco’Sense detectou vazamento na área de serviço.

    1. Verifique a mangueira da máquina de lavar.
    2. Feche o registro geral se necessário.
    3. Use fita de vedação se possível.
    4. Acione um profissional.

    Equipe Eco'Sense 🚿
    `
  },
  {
    titulo: "Vazamento de gás no aquecedor",
    texto: `
    Detectamos um possível vazamento de gás no aquecedor do banheiro.

    1. Desligue o aquecedor.
    2. Ventile bem o local.
    3. Verifique o flexível e conexões.
    4. Acione assistência técnica.

    Eco'Sense cuida da sua segurança 🔧🔥
    `
  }
];

function mostrarDetalhes(index) {
  const mensagem = mensagens[index];
  document.getElementById("mensagem-texto").innerText = mensagem.texto;
  document.getElementById("mensagem-detalhe").style.display = "flex";
}

function fecharMensagem() {
  document.getElementById("mensagem-detalhe").style.display = "none";
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