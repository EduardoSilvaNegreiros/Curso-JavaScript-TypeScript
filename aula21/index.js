/*
Primitivos (imutáveis) - string, number, boolean, undefine, null (bigint, symbol) - Valores copiados

Referencia (mutável) - array, object, function - Passados por referencia
*/

/*let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/

/*
let a = [1, 2, 3];
let b = [...a];
let c = b; 
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b, a);
a.push('Luiz');
console.log(a, c);
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
const b = a;
b.nome = 'Eduardo';
console.log(a);
console.log(b);