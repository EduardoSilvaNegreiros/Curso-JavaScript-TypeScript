/*
 * Aritméticos 
 *+ Adição / Concatenação (- / *)
 * ** Potenciação
 * % Resto da divisão
 * ()
 * **
 * *
 * / %
 * +- 
 * Incremento = ++
 * Decremento = --
 * Operadores de atribuição
 * NaN - Not a number parseInt (inteiro), parseFloat(decimais), Number (pega os dois, sem se preocupar)
 */

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);

let contador = 2;
contador **= 10;
console.log(contador);

const num4 = 10;
const num5 = Number('5.2'); // Converte para uma String para um Number
console.log(num4 + num5)
console.log(typeof (num5))