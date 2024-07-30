// function createPeople(name, age) {
//     return {
//         name: name,
//         age: age,
//         greet() {
//             return `Olá, meu nome é ${this.name}!`;
//         }
//     };
// }


// const p1 = createPeople('Eduardo', 18);
// console.log(p1.greet('Eduardo'));

// ##############################################################

// function createCar(marca, modelo, ano) {
//     return {
//         marca: marca,
//         modelo: modelo,
//         ano: ano,
//         descricao() {
//             return `Meu carro é da ${this.marca}, modelo ${this.modelo}, do ano de ${this.ano}`;
//         }
//     };
// }


// const carro1 = createCar('Honda', 'Civic', 2008);
// const carro2 = createCar('Toyota', 'Corolla', 2020);
// const carro3 = createCar('Ford', 'Mustang', 1967);

// console.log(carro1.descricao());
// console.log(carro2.descricao());  
// console.log(carro3.descricao());  



// ##################################################################


// function createBook(titulo, autor, anoPublicacao) {
//     return {
//         titulo: titulo,
//         autor: autor,
//         anoPublicacao: anoPublicacao,
//         falaLivro() {
//             return `Recentemente eu li o livro ${this.titulo}. do/a ${this.autor} do ano de ${this.anoPublicacao}`;
//         },
//         isClassico() {
//             let anoAtual = new Date().getFullYear();
//             if((anoAtual - this.anoPublicacao) > 50) {
//                 return (`È um clássico`);
//             } else {
//                 return `Não é um clássico`;
//             };
//             }
//         }
//     }


// const primeiroLivro = createBook('O poder do hábito', 'Charles Duhhing', 2006);
// console.log(primeiroLivro.falaLivro());
// console.log(primeiroLivro.isClassico());

// ##################################################################




