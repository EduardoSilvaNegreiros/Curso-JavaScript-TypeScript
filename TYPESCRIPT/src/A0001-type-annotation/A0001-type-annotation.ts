/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)

export let name: string = 'Eduardo'; // Qualquer tipo de string
let age: number = 18; // Qualquer tipo de numero
let adult: boolean = true; // true ou false
let symbol: symbol = Symbol('Quaquer simbolo'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
let arrayOfStrings2: string[] = ['a', 'b'];

// Objetos
// Com ? a chave fica opcional
let person: { name: string; age: number; adult?: boolean } = {
  age: 18,
  name: 'Edu',
};

// Funções
// Tipagem dos parametros e função
function soma(x: number, y: number): number {
  return x + y;
}
const result = soma(2, 2);
const soma2: (x: number, y: number) => number = (x, y) => x + y;
