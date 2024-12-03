document.addEventListener('DOMContentLoaded', function () { console.log('DOM completamente carregado e pronto para ser manipulado.'); // Identifica os elementos necessários const loading = document.getElementById('loading'); const mainContent = document.getElementById('mainContent'); const progressBar = document.getElementById('progress-bar'); const progressText = document.getElementById('progress-text'); const futuristicButton = document.getElementById('futuristicButton'); const startButton = document.getElementById('startButton'); // Verificar se todos os elementos foram encontrados corretamente if (!loading || !mainContent || !progressBar || !progressText || !futuristicButton || !startButton) { console.error('Algum elemento não foi encontrado no DOM.'); return; } let progress = 0; // Função para simular o carregamento e atualizar a barra de progresso function updateLoadingProgress() { if (progress < 100) { progress++; // Aumenta a barra a cada 100ms progressBar.style.width = progress + '%'; // Atualiza a largura da barra progressText.innerText = progress + '%'; // Atualiza o texto da porcentagem // Se a barra atingir 100%, esconde o loading, exibe o botão futurista if (progress === 100) { setTimeout(() => { loading.classList.add('hidden'); // Esconde o loading futuristicButton.classList.remove('hidden'); // Exibe o botão futurista }, 500); // Delay pequeno para o efeito de transição } } } // Atualiza a barra de carregamento a cada 100ms const loadingInterval = setInterval(updateLoadingProgress, 100); // Evento para mostrar a página principal ao clicar no botão startButton.addEventListener('click', function () { futuristicButton.classList.add('hidden'); // Esconde o botão mainContent.classList.remove('hidden'); // Exibe a página principal }); });
