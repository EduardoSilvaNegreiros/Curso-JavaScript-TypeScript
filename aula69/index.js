const pessoas = [
    { nome: 'Eduardo', idade: 18 },
    { nome: 'Rafaela', idade: 57 },
    { nome: 'Gabriel', idade: 11 },
    { nome: 'Alexandre', idade: 30 },
    { nome: 'Luiz', idade: 20 },
    { nome: 'Gargamel', idade: 60 },
]

const pessoaVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador; 
    return valor;
});
console.log(pessoaVelha);


// const numeros = [1, 3, 50, 89, 77, 66, 84];
// const total = numeros.reduce((acumulador, valor, indice, array) => {
//     if(valor % 8 === 0) acumulador.push(valor);
//     return acumulador
// }, []);
// console.log(total);


// const total = numeros.reduce((acumulador, valor) => {
//     if (valor % 2 !== 0) {
//         acumulador += valor;
//         console.log(valor);
//     }
    
//     return acumulador;
// }, 0);
// console.log(total);





