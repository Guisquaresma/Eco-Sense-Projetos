document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const historyList = document.getElementById("history-list");
  const clearBtn = document.querySelector(".clear-btn");
  const viewMoreBtn = document.querySelector(".view-more-btn");

  // Carregar histórico salvo no Local Storage
  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

  // Função para exibir o histórico
  function updateHistoryDisplay() {
    historyList.innerHTML = "";
    const maxVisible = historyList.classList.contains("expanded") ? searchHistory.length : 5;
    
    searchHistory.slice(0, maxVisible).forEach(term => {
      const newItem = document.createElement("li");
      newItem.textContent = term;
      historyList.appendChild(newItem);
    });

    // Controlar o botão "Ver Mais"
    viewMoreBtn.style.display = searchHistory.length > 4 ? "inline-block" : "none";
  }

  // Função para adicionar pesquisa ao histórico
  function addSearchToHistory(searchTerm) {
    if (searchTerm.trim() !== "" && !searchHistory.includes(searchTerm)) {
      searchHistory.unshift(searchTerm);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      updateHistoryDisplay();
    }
  }

  // Evento de busca
  document.querySelector(".search-btn").addEventListener("click", () => {
    if (searchInput.value.trim() !== "") {
      addSearchToHistory(searchInput.value);
      searchInput.value = "";
    }
  });

  // Limpar histórico
  clearBtn.addEventListener("click", () => {
    searchHistory.length = 0;
    localStorage.removeItem("searchHistory");
    updateHistoryDisplay();
  });

  // Ver mais / Ver menos
  viewMoreBtn.addEventListener("click", () => {
    if (historyList.classList.contains("expanded")) {
      historyList.classList.remove("expanded");
      viewMoreBtn.textContent = "Ver Mais";
    } else {
      historyList.classList.add("expanded");
      viewMoreBtn.textContent = "Ver Menos";
    }
    updateHistoryDisplay();
  });

  // Carregar o histórico ao iniciar
  updateHistoryDisplay();
});


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
