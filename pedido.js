// Espera o documento HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os elementos do HTML pelos seus IDs
    const btnSim = document.getElementById('btnSim');
    const btnNao = document.getElementById('btnNao');
    const container = document.getElementById('container');

    // Adiciona um "ouvinte" para o evento de clique no botão "Sim"
    btnSim.addEventListener('click', function() {
        
        // Define o novo conteúdo da página após o "Sim"
        // Damos um ID ('mensagem-clique') ao parágrafo para podermos alterá-lo depois
        container.innerHTML = `
            <h1>Eu sabia que você diria sim! ❤️</h1>
            <p id="mensagem-clique" style="font-size:14px; color:#555;">(Clique na nossa foto 😉)</p>
            <img id="fotoFinal" src="imagens/img2.jpg" alt="Nossa Foto Comemorando" title="Clique para uma surpresa!">
        `;

        // =============================================================
        // ==     INÍCIO DA NOVA LÓGICA DE CLIQUES                    ==
        // =============================================================

        // Seleciona os novos elementos que acabamos de criar
        const fotoFinal = document.getElementById('fotoFinal');
        const mensagemClique = document.getElementById('mensagem-clique');
        
        // Deixa o cursor do rato como uma "mãozinha" para indicar que a foto é clicável
        fotoFinal.style.cursor = 'pointer';

        // Prepara os dois áudios que vamos usar
        const somBrincadeira = new Audio('audio/brincadeira.ogg');
        const nossaMusica = new Audio('audio/nossa-musica.mp3');

        // Cria uma variável para contar os cliques na foto, começando em 0
        let cliquesNaFoto = 0;

        // Adiciona o "ouvinte" de clique à foto
        fotoFinal.addEventListener('click', function() {
            // A cada clique, aumenta o contador
            cliquesNaFoto++;

            // Lógica baseada no número de cliques
            if (cliquesNaFoto === 1) {
                // PRIMEIRO CLIQUE
                // Toca o som da brincadeira
                somBrincadeira.play();
                // Muda o texto da mensagem
                mensagemClique.innerHTML = "<strong>Tô brincando, clique dnv 😂</strong>";
            } else if (cliquesNaFoto === 2) {
                // SEGUNDO CLIQUE
                // Toca a música principal
                nossaMusica.play();
                // Muda a mensagem para algo mais romântico
                mensagemClique.innerHTML = "<strong>Agora sim! Essa é pra nós. ❤️</strong>";
            }
            // Para cliques subsequentes (3, 4, etc.), nada mais acontece,
            // mas a música principal pode ser tocada novamente se desejar.
        });
        
        // =============================================================
        // ==      FIM DA NOVA LÓGICA                                 ==
        // =============================================================
    });

    // Adiciona um "ouvinte" para o evento de passar o rato por cima do botão "Não"
    btnNao.addEventListener('mouseover', function() {
        fugir();
    });

    // Função que faz o botão "Não" fugir
    function fugir() {
        const maxWidth = window.innerWidth - btnNao.clientWidth;
        const maxHeight = window.innerHeight - btnNao.clientHeight;
        const randomLeft = Math.floor(Math.random() * maxWidth);
        const randomTop = Math.floor(Math.random() * maxHeight);
        btnNao.style.position = 'absolute';
        btnNao.style.left = randomLeft + 'px';
        btnNao.style.top = randomTop + 'px';
    }
});