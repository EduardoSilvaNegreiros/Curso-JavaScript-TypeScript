const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Negreiros',
    idade: '18 anos',
    endereco: {
        rua: 'Bonaventura Viviane',
        numero: 178
    }
};
// Atribuição via desestruturação 
const { nome, sobrenome, ...rest } = pessoa;
console.log(nome, sobrenome, rest);