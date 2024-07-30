// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos 

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(valor => valor > 50);
// console.log(numerosFiltrados);
// Filter ele quer que retorne um boolean


const pessoas = [
    {nome: 'Eduardo', idade: 18},
    {nome: 'Rafaela', idade: 57},
    {nome: 'Gabriel', idade: 11},
    {nome: 'Alexandre', idade: 30},
    {nome: 'Luiz', idade: 20},
    {nome: 'Gargamel', idade: 60},
]
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 50);
const pessoasVelhas = pessoas.filter(obj => obj.idade >= 50);
const pessoasTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasTerminaComA);


