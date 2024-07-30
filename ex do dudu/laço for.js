// // let numeros = [2, 3, 5, 7, 11];
// // let soma = 0;

// // for (let i = 0; i < numeros.length; i++) {
// //     soma += numeros[i];
// // }
// // console.log(soma);
// #########################################
// // let numeros = [45, 3, 89, 29, 10];
// // let maiorNumero = [0];

// // for (let i = 0; i < numeros.length; i++) {
// //     if (numeros[i] > maiorNumero) {
// //         maiorNumero = numeros[i];
// //     }
// // }
// // console.log(maiorNumero);
// #########################################
// let numeros = [20, 40, 60, 80, 100];
// let somaDosNumeros = 0;

// for (let i = 0; i < numeros.length; i++) {
//     somaDosNumeros += numeros[i]
// }


// let media = somaDosNumeros / numeros.length

// console.log(media);
// #########################################
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i])
    }
}

console.log(pares);
console.log(impares);