let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Digite um número entre 1 e ${numeroLimite}:`);
}
exibirMensagemInicial();

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ?
        'tentativas' : 'tentativa'; 
        exibirTextoNaTela('h1', 'PARABÉNS VOCÊ ACERTOU!!');
        exibirTextoNaTela('p', `Você conseguiu com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let maiorOuMenor = chute > numeroSecreto ? exibirTextoNaTela('p', 'O número secreto é menor, tente novamente:') : exibirTextoNaTela('p', 'O número secreto é maior, tente novamente:');
        tentativas++;
        limparCampo();
    } 
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas= 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

