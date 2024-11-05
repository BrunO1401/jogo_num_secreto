let listaDeNumerosSorteados = []
let limiteMaximo = 10
let numeroSecreto = gerarNumeroAleatorio()
let Tentativas = 1

mensagemInicial()

function exebirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function verificarChute() {
    let chute = document.querySelector('input').value
    

    if(chute == numeroSecreto){
        let quantidadeTentativa = tentativas()
        let mensagemTentativas = quantidadeTentativa > 1 ? "tentativas" : "tentativa"

        exebirTextoNaTela('h1', `Acertou!`)
        exebirTextoNaTela('p', `Você descobriu o número secreto com ${quantidadeTentativa} ${mensagemTentativas}!`)

        document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        if(chute > numeroSecreto){
            exebirTextoNaTela('p', 'Número secreto é menor!')
        } else {
            exebirTextoNaTela('p','Número secreto é maior!')
        }
        tentativas()
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteMaximo + 1)
    let quantidadeElementosLista = listaDeNumerosSorteados.length

    if(quantidadeElementosLista == limiteMaximo){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function tentativas() {
     return Tentativas++
}

function mensagemInicial(){
    exebirTextoNaTela('h1', 'Jogo do Número Secreto')
    exebirTextoNaTela('p', 'Escolha um número de 1 até 10')
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    mensagemInicial()
    verificarChute()
    Tentativas = 1
    verificarChute()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}