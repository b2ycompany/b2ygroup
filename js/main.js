document.addEventListener('DOMContentLoaded', function () { console.log('DOM completamente carregado e pronto para ser manipulado.'); 
// Identifica os elementos necessários 
const loading = document.getElementById('loading'); const intro = document.getElementById('intro'); const enterButton = document.getElementById('enterButton'); const mainContent = document.getElementById('mainContent'); console.log(loading, intro, enterButton, mainContent); 
// Verificar se todos os elementos foram encontrados corretamente 
if (!loading || !intro || !enterButton || !mainContent) { console.error('Algum elemento não foi encontrado no DOM.'); return; } 
// Garante que a transição acontece após 3 segundos 
setTimeout(function () { console.log('3 segundos se passaram, transição da tela de loading para a introdução.'); if (loading && intro) { loading.classList.add('hidden'); 
// Esconde o loading 
intro.classList.remove('hidden'); 
// Mostra a introdução 
} }, 3000); 
// 3 segundos de delay 
// Evento para transitar da introdução para o conteúdo principal 
if (enterButton) { enterButton.addEventListener('click', function () { console.log('Botão "Entrar" clicado.'); 
// Esconde a introdução e mostra o conteúdo principal 
if (intro && mainContent) { intro.classList.add('hidden'); mainContent.classList.remove('hidden'); } }); } });
