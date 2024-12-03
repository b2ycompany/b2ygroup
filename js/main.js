document.addEventListener('DOMContentLoaded', function () { console.log('DOM completamente carregado e pronto para ser manipulado.'); 
// Identifica os elementos necessários 
const loading = document.getElementById('loading'); const intro = document.getElementById('intro'); const enterButton = document.getElementById('enterButton'); const mainContent = document.getElementById('mainContent'); const progressBar = document.getElementById('progress-bar'); const progressText = document.getElementById('progress-text'); 
// Verificar se todos os elementos foram encontrados corretamente 
if (!loading || !intro || !enterButton || !mainContent || !progressBar || !progressText) { console.error('Algum elemento não foi encontrado no DOM.'); return; } let progress = 0; 
// Função para simular o carregamento e atualizar a barra de progresso 
function updateLoadingProgress() { if (progress < 100) { progress++; 
    // Aumenta a barra a cada 100ms 
    progressBar.style.width = progress + '%'; 
    // Atualiza a largura da barra 
    progressText.innerText = progress + '%'; 
    // Atualiza o texto da porcentagem 
    // Se a barra atingir 100%, esconde o loading e mostra a introdução 
    if (progress === 100) { setTimeout(() => { loading.classList.add('hidden'); 
    // Esconde o loading 
    intro.classList.remove('hidden'); 
    // Exibe a introdução 
}, 500); 
// Delay pequeno para o efeito de transição 
} } } 
// Atualiza a barra de carregamento a cada 100ms 
const loadingInterval = setInterval(updateLoadingProgress, 100); 
// Evento para transitar da introdução para o conteúdo principal 
if (enterButton) { enterButton.addEventListener('click', function () { console.log('Botão "Entrar" clicado.'); 
// Esconde a introdução e mostra o conteúdo principal 
if (intro && mainContent) { intro.classList.add('hidden'); mainContent.classList.remove('hidden'); } }); 
} });


