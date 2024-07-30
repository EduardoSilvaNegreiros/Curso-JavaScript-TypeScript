// const numeros = [5, 50, 80, 1, 2, 3, 5 , 8, 7, 11, 15, 22, 27];
// const numerosDobrados = numeros.map(valor => valor * 2);
// console.log(numerosDobrados);


const pessoas = [
    { nome: 'Eduardo', idade: 18 },
    { nome: 'Rafaela', idade: 57 },
    { nome: 'Gabriel', idade: 11 },
    { nome: 'Alexandre', idade: 30 },
    { nome: 'Luiz', idade: 20 },
    { nome: 'Gargamel', idade: 60 },
]

const nomeDasPessoas = pessoas.map(obj => obj.nome);
const idadeDasPessoas = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice
    return newObj
});






// console.log(nomeDasPessoas);
// console.log(idadeDasPessoas);
// console.log(comIds);
// console.log(pessoas);
