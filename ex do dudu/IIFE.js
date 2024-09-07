// const contador = (function() {
//     let valor = 0;

//     return {
//         incrementar: function() {
//             valor++;
//         },
//         obterValor: function() {
//             return valor
//         }
//     };
// })();

// contador.incrementar(); 
// console.log(contador.obterValor());

// ##########################################################################################################


// const calculadora = (function () {
//     const operadores = {
//         adicao: function (valor) {
//             return this.valorInicial + valor;
//         },
//         subtracao: function (valor) {
//             return this.valorInicial - valor;
//         },
//         multiplicacao: function (valor) {
//             return this.valorInicial !== 0 ? valor * this.valorInicial : valor;
//         },
//         divisao: function (valor) {
//             if (valor !== 0) {
//                 return this.valorInicial / valor;
//             } else {
//                 return "Erro: divisão por zero!";
//             }
//         }
//     };



//     return operadores;
// })();

// calculadora.valorInicial = 5;
// console.log(calculadora.adicao(2)); 
// console.log(calculadora.subtracao(3)); 
// console.log(calculadora.multiplicacao(4));
// console.log(calculadora.divisao(2)); 

//###############################################
// (function falaFrase(nome, idade, cidade) {
//     console.log(`Olá ${nome}, você tem ${idade} anos e mora na cidade de ${cidade}!`);
// })();

// #######################################################

// const calculadora = (function () {
//     const operadores = {
//         adicao: function (valor) {
//             return this.valorInicial + valor;
//         },
//         subtracao: function (valor) {
//             return this.valorInicial - valor;
//         },
//         multiplicacao: function (valor) {
//             return this.valorInicial * valor;
//         },
//         divisao: function (valor) {
//             return this.valorInicial / valor;
//         },
//     };



//     return operadores
// })();

// calculadora.valorInicial = 5;
// console.log(calculadora.adicao(5)); // Deverá imprimir 10
// console.log(calculadora.subtracao(2)); // Deverá imprimir 3
// console.log(calculadora.multiplicacao(3)); // Deverá imprimir 15
// console.log(calculadora.divisao(1)); // Deverá imprimir 5

// ###############################################################

// const calculadora = (function () {
//     const operadores = {
//         adicao(valor) {
//             return this.valorInicial += valor;
//         },
//         subtracao(valor) {
//             return this.valorInicial -= valor;
//         },
//         multiplicacao(valor) {
//             return this.valorInicial !== 0 ? valor * this.valorInicial : valor;
//         },
//         divisao(valor) {
//             if (valor !== 0) {
//                 return this.valorInicial / valor;
//             } else {
//                 return "Erro: divisão por zero!";
//             }
//         },
//     }
//     return operadores;
// })();

// calculadora.valorInicial = 5;
// console.log(calculadora.adicao(2)); 
// console.log(calculadora.subtracao(3)); 
// console.log(calculadora.multiplicacao(4));
// console.log(calculadora.divisao(2)); 


const calculadora =  (function () {
    const operadores = {
        adicao(valor) {
            return this.valorInicial += valor;
        },
        subtracao(valor) {
            return this.valorInicial -= valor;
        },
        divisao(valor) {
            if (valor) {
                if (valor !== 0) {
                    return this.valorInicial / valor;
                } else {
                    return 'Erro: divisão por zero!';
                }
            }
        },
        multiplicacao(valor) {
            return this.valorInicial !== 0 ? valor * this.valorInicial : valor;
        },
    }
    return operadores;
})();

calculadora.valorInicial = 5;
console.log(calculadora.adicao(2)); 
console.log(calculadora.subtracao(3)); 
console.log(calculadora.multiplicacao(4));
console.log(calculadora.divisao(2)); 



