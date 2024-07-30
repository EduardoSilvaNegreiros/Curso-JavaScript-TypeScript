/*let array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz'
array = 'Outra'
console.log(array);
*/

/*const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = '25';

const nome02 = 'Eduardo';
const sobrenome02 = 'Negreiros';
const idade02 = '18';
*/

/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda', 
    idade: '25'
};

const pessoa2 = {
    nome: 'Eduardo',
    sobrenome: 'Negreiros', 
    idade: '18'
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
*/

/*
function criaPessoa(nome, sobrenome, idade) {
    return{
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa('Eduardo', 'Negreiros', 18);
const pessoa2 = criaPessoa('Igor', 'Negreiros', 27);
const pessoa3 = criaPessoa('Ines', 'Silva', 53);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();