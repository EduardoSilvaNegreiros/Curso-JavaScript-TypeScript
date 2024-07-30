const numeros = [1, 3, 50, 89, 77, 66, 84];
const numerosPares = numeros.filter(valor => {
    return valor % 2 === 0
}).map(valor => {
    return valor * 2
}).reduce((ac, valor) => ac += valor);
console.log(numerosPares);
