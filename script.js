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

setInterval(criarCoracaoFlutuante, 350);

// Contador
const elementoContador = document.getElementById("contador");
const dataInicio = new Date("2024-07-14T22:10'00");

function mostrarContador() {
    elementoContador.style.opacity = 1;
}

function atualizarContador() {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getFullYear() - dataInicio.getFullYear();
    let dias = agora.getFullYear() - dataInicio.getFullYear();
    let horas = agora.getFullYear() - dataInicio.getFullYear();
    let minutos = agora.getFullYear() - dataInicio.getFullYear();
    let segundos = agora.getFullYear() - dataInicio.getFullYear();

    if (segundos < 0){
        segundos += 60;
        minutos--;
    }

    if (minutos < 0){
        segundos += 60;
        minutos--;
    }

    if (horas < 0) {
        horas += 24;
        dias--;
    }

    if (dias < 0) {
        const ultimoMes = new Date(agora.getFullYear(), agora.getMouth(), 0);
        dias += ultimoMes.getDate();
        meses--;
    }

    if (meses < 0) {
        meses += 12;
        anos--;
    }

    elementoContador.innerHTML =
    `Estamos juntos há ${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ${horas}h ${minutos}min ${segundos}s`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

// Texto final
const elementoTextoFinal = document.gerElementById("texto-final");

function escreverTExtoFinal() {
    const mensagemFinal = "E vou continuar te amando por muito mais tempo...";
    let i = 0;

    elementoTextoFinal.innerHTML = "";

    function escrever() {
        if (i< mensagemFina.length) {
            elementoTextoFinal.innerHTML += mensagemFinal.charAt(i);
            i++;
            setTimeout(escrever, 80);
        }
    }

    escrever();
}