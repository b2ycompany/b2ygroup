document.addEventListener('DOMContentLoaded', function () { const progressBar = document.getElementById('progress-bar'); const progressText = document.getElementById('progress-text'); const loadingScreen = document.getElementById('loading-screen'); const startButtonContainer = document.getElementById('start-button-container'); const startButton = document.getElementById('start-button'); const mainContent = document.getElementById('main-content'); let progress = 0; 
// Função de progresso 
function loadProgress() { if (progress < 100) { progress++; progressBar.style.width = progress + '%'; progressText.textContent = progress + '%'; } else { clearInterval(interval); startButtonContainer.classList.add('visible'); } } const interval = setInterval(loadProgress, 50); 
// Ação do botão ao clicar 
startButton.addEventListener('click', function () { loadingScreen.style.display = 'none'; mainContent.style.display = 'block'; }); });

