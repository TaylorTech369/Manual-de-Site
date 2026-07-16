// 1. Mapeamos os elementos da tela que vamos usar
const botao = document.getElementById("botaoDeCor");
const corDoBotao = document.getElementById("inputDeCor");
const cardTutorial = document.getElementById("card-tutorial");

const h2CardTutorial = document.querySelector("#card-tutorial h2");


// 2. Criamos uma variável para controlar o "estado" da nossa planta
let cor = corDoBotao

// 3. Função que executa a transformação
function mudancaDeCor() {

    const corDigitada = corDoBotao.value.replace(/\s+/g, '').toLowerCase(); 
    // O replace retira todo e qualquer espaço vazio, transformando eles em um conjunto de letras sem espaçamento
    // toLowerCase transforma tudo em minusculo

    if (corDoBotao === "") {
        botao.style.backgroundColor = 'white';

    } else {

        if(corDigitada == 'blackpink'){
            alert("How You Like That, foi mal, não temos essa banda por aqui.")
        }
        
        botao.style.backgroundColor = corDigitada;
        cardTutorial.style.borderColor = corDigitada;
        cardTutorial.style.color = corDigitada;

        h2CardTutorial.style.color = corDigitada
        cardTutorial.style.backgroundColor = `color-mix(in srgb, ${corDigitada} 40%, transparent)`;


    }
}

botao.addEventListener("click", mudancaDeCor);