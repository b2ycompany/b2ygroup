document.addEventListener('DOMContentLoaded', function () { const progressBar = document.getElementById('progress-bar'); const progressText = document.getElementById('progress-text'); const loadingScreen = document.getElementById('loading-screen'); const startButtonContainer = document.getElementById('start-button-container'); const startButton = document.getElementById('start-button'); const mainContent = document.getElementById('main-content'); let progress = 0; 
// Função para simular o carregamento com efeitos 
function loadProgress() { if (progress < 100) { progress++; progressBar.style.width = progress + '%'; progressText.textContent = progress + '%'; if (progress === 100) { setTimeout(() => { startButtonContainer.classList.add('visible'); 
// Exibe o botão ao completar 100% 
}, 500); } } } 
// Atualiza o progresso a cada 50ms 
const interval = setInterval(loadProgress, 50); 
// Ação do botão ao clicar 
startButton.addEventListener('click', function () { 
    // Esconde a tela de carregamento com animação de fade 
    loadingScreen.style.opacity = 0; loadingScreen.style.pointerEvents = 'none'; 
    // Exibe a página principal com animação de fade-in 
    setTimeout(function () { mainContent.style.display = 'block'; mainContent.style.opacity = 1; }, 500); }); });
