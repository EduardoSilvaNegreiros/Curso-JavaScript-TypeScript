// const pessoa = {
//     nome: 'Eduardo',
//     sobrenome: 'Negreiros',
// };
// const chave = 'nome';
// console.log(pessoa[chave]);


// const pessoa1 = new Object();
// pessoa1.nome = 'Eduardo';

// pessoa1.sobrenome = 'Negreiros';

// pessoa1.idade = 18;

// pessoa1.falarNome = function(){
//     return(`Olá meu nome é ${this.nome} ${this.sobrenome}`);
// };

// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date;
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }
// delete pessoa1.nome;
// console.log(pessoa1.getDataNascimento());
// console.log(pessoa1.sobrenome);

// const pessoa2 = {
//     nome: 'Eduardo', 
//     sobrenome: 'Negreiros'
// };
// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);



// Factory functions / Constructor functions / Classes (Sintaxe Sugar)
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome: 'Eduardo',
//         sobrenome: 'Negreiros',
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }
// const p1 = criaPessoa('Eduardo', 'Negreiros');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    // return this; // {nome: Eduardo}
}





// {} <- this -> this
// p1 = (ENDERECOMEMORIA) -> 'Valor'
// P1.ENDERECOMEMORIA = {nome: 'Outra Coisa'}
// p1 = (NOVOENDERECOME...)
const p1 = new Pessoa('Eduardo', 'Negreiros');
Object.freeze(p1);
p1.nome = 'Outra Coisa';
const p2 = new Pessoa('Inês', 'Negreiros');
console.log(p1);
console.log(p2);

// const p2 = {};
// p2.nome = 'Eduardo';