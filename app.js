let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;
exibeBoasVindas();

function exibeNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibeBoasVindas() {
exibeNaTela('h1', 'Jogo do número sereto');
exibeNaTela('p', 'Digite um número entre 1 e 100:');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibeNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibeNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
        exibeNaTela('p', 'O número secreto é menor!');
        } else {
        exibeNaTela('p', 'O número secreto é maior!');
        }
        tentativas++
        limpaCampo();
    }
}

function geraNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
        if (quantidadeDeElementosNaLista == numeroLimite) {
         listaDeNumerosSorteados = [];
        }

    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        geraNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
        return numeroSorteado;
    }
}
function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    tentativas = 1;
    exibeBoasVindas();
    limpaCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}