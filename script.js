const mensagem = "Eu te amo Victória";
let indice = 0;
const elementoTexto = document.getElementById("texto");

function escreverTexto() {
    if (indice < mensagem.length) {
        elementoTexto.inner += mensagem.charAt(indice);
        indice++
        setTimeout(escreverTexto, 100);
    } else {
        setTimeout(mostrarContador, 1000)
        setTimeout(escreverTextoFinal, 4000)
    }
}

escreverTexto();

// Corações subindo
const containerCoracoes = document.getElementById("container-coracoes");

    function criarCoracaoFlutuante() {
        const coracao = document.createElement("div");
        criarCoracaoFlutuante.classList.add("coracao");
        coracao.innerHTML = Math.random() > 0.5 ? "💕" : "💞";

        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.fontSize = (18 + Math.random() * 22) + "px";
        coracao.style.animationDuration = (4 + Math.random() * 4) + "s";

        containerCoracoes.appendChild(coracao); 

        setTimeout( () => {
            coracao.remove();
        }, 8000);
    }
