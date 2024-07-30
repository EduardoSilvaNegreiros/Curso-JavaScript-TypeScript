// const maiorIdade = (idade) => {
//     if (idade >= 18) {
//         console.log('Está maior de idade');
//     } else {
//         console.log('Não esta maior de idade');
//     }
// } 
// maiorIdade(10);

// const eNegativo = (num) => {

//     if (num > 0) {
//         alert('Seu número é positivo');
//     } else if (num < 0) {
//         alert('Seu número é negativo');
//     } else {
//         alert('Seu número é 0')
//     }
// };

// const pedeNumero = parseFloat(prompt('Digite um número:'));
// eNegativo(pedeNumero);

// const verificarNumero = (num) => {
//     if (num > 0) {
//         alert('Seu número é positivo');
//     } else if (num < 0) {
//         alert('Seu número é negativo');
//     } else {
//         alert('Seu número é 0');
//     }
// };
// const pedeNumero = parseFloat(prompt('Me fale um número')); 
// verificarNumero(pedeNumero);


// function calculaTarifa(idade, km) {

//     const tarifaBase = 3.50;
//     let tarifaFinal = tarifaBase;
//     const precoPorKm = 1.50;
//     let custoAdicional = 0;


//     if (idade >= 5 && idade <= 12 || idade >= 65) {
//         tarifaFinal *= 0.5
//         alert(`Você recebera um desconto de 50% ná tarifa, que será de ${tarifaFinal.toFixed(2)} reais.`)
//     } else {
//         alert(`Você pagara a tarifa normal, ira pagar ${tarifaBase.toFixed(2)} reais.`);
//     }

//     if (km > 10) {
//         let quilometrosExcendente = km - 10;
//         custoAdicional = quilometrosExcendente * precoPorKm;
//         tarifaFinal += custoAdicional
//         alert(`Além disso, você irá pagar R$${custoAdicional.toFixed(2)} pelos ${quilometrosExcendente} km excedentes.`)
//     }

//     alert(`O custo total da sua viagem será de R$${tarifaFinal.toFixed(2)}.`);

// }

// const idade = parseFloat(prompt('Por favor, me fale a sua idade:'));
// const km = parseFloat(prompt('Agora me fale quantos Km você percorreu:'));
// calculaTarifa(idade, km);

// function classificaIngresso(idade, evento) {
//     const precoBase = 50.00;
//     let precoFinal = precoBase;

//     if (isNaN(idade) || idade < 0) {
//         alert("Por favor, insira uma idade válida.");
//         return;
//     }

//     if (!['musical', 'comédia', 'teatro'].includes(evento.toLowerCase())) {
//         alert("Por favor, escolha um evento válido (musical, comédia, teatro).");
//         return; 
//     }

//     if (idade < 18 || idade >= 65) {
//         precoFinal *= 0.8;
//     }

//     if (evento === 'musical') {
//         precoFinal += 20;
//     } else if (evento === 'comédia') {
//         precoFinal += 10;
//     } else if (evento === 'teatro') {
//         if (idade === 18) {
//             precoFinal *= 0.9
//         } else {
//             precoFinal *= 0.7;
//         }
//     }
//     alert(`O custo total do ingresso é: R$${precoFinal.toFixed(2)}`);
// }
// const pedeIdade = parseFloat(prompt('Me informe a sua idade:'))
// const pedeEvento = prompt('Agora por gentileza, escolha um evento disponível. Temos musical, comédia e teatro')
// classificaIngresso(pedeIdade, pedeEvento);



// function calculaNota() {
//     const nota1 = parseFloat(document.querySelector('#nota1').value) || 0;
//     const nota2 = parseFloat(document.querySelector('#nota2').value) || 0;
//     const nota3 = parseFloat(document.querySelector('#nota3').value) || 0;
//     const nota4 = parseFloat(document.querySelector('#nota4').value) || 0;

//     let media = (nota1 + nota2 + nota3 + nota4) / 4;

//     let msg = '';

//     if (
//         nota1 > 10 || nota1 < 0 ||
//         nota2 > 10 || nota2 < 0 ||
//         nota3 > 10 || nota3 < 0 ||
//         nota4 > 10 || nota4 < 0) {
//         alert('Insira uma nota válida entre 0 e 10');
//         return;
//     }

//     if (media >= 7.0) {
//         msg = `Aprovado com média de ${media.toFixed(2)}`;
//     } else if (media >= 5) {
//         msg = `Está Média insuficiente, necessária recuperação. Sua média: ${media.toFixed(2)}`;
//     } else {
//         msg = `Vai ir para a recuperação, sua media: ${media.toFixed(2)}`;
//     }


//     document.querySelector('#resultado').textContent = msg;
// }


// function verificaImparOuPar (num) {
//     if (num % 2 === 0) {
//         console.log('Par');
//     } else {
//         console.log('Impar');
//     }
// }
// verificaImparOuPar(197);


// function escolheDirecao(caminho) {
//     const frente = 'frente';
//     const direita = 'direita';
//     const esquerda = 'esquerda';
//     const opcoesValidas = [frente, direita, esquerda];


//     if (!opcoesValidas.includes(caminho)) {
//         alert('Insira uma direção válida: frente, direita ou esquerda.');
//     } else if (caminho === frente) {
//         alert('Você irá seguir normalmente a sua jornada');
//     } else if (caminho === direita) {
//         alert('Parabéns, você encontrou o tesouro perdido, além disso poderá seguir normalmente ');
//     } else if (caminho === esquerda) {
//         alert('Você caiu em uma armadilha, corra!');
//     }
// }
// const pedeCaminho = prompt('Escolha uma direção: frente, direita ou esquerda:');
// escolheDirecao(pedeCaminho);



// function escolhaDoUsuario() {
//     let escolha = prompt('Escolha pedra, papel ou tesoura').toLowerCase();
//     const opcoesValidas = ['pedra', 'papel', 'tesoura'];


//     while (!opcoesValidas.includes(escolha)) {
//         alert('Insira uma opção valida!');
//         escolha = prompt('Escolha pedra, papel ou tesoura').toLowerCase();
//     } 
//     return escolha
// }



// function escolhaAleatoriamenteDoComputador() {
//     const escolha = Math.floor(Math.random() * 3);
//     switch (escolha) {
//         case 0:
//             return 'pedra';
//         case 1:
//             return 'tesoura';
//         case 2:
//             return 'papel';
//     }
// }


// function rodaJogo() {
//     const escolhaUsuario = escolhaDoUsuario();
//     const escolhaComputador = escolhaAleatoriamenteDoComputador();

//     console.log(`O usuario escolheu ${escolhaUsuario}`);
//     console.log(`O computador escolheu ${escolhaComputador}`);


//     if (escolhaUsuario === escolhaComputador) {
//         alert('Empate!');
//     } else if (
//         (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
//         (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
//         (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
//     ) {
//         alert('Você ganhou!');
//     } else {
//         alert('Computador ganhou!');
//     }
// }
// rodaJogo();


// function converteTemperatura(temperatura, escala) {
//     if (escala === 'C') {
//         return (temperatura * 9 / 5) + 32;
//     } else if (escala === 'F') {
//         return (temperatura - 32) * 5 / 9;
//     }
// }
// console.log(converteTemperatura(100, 'C')); 
// console.log(converteTemperatura(32, 'F'));  
