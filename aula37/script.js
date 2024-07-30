// const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Negreiros',
    idade: '18'
}; 


// const chave = 'nome';
// console.log(pessoa.nome);
// console.log(pessoa[chave]); 

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

// for (let index in frutas) {
//     console.log(index);
// } 

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }