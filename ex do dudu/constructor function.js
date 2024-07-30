// function Livro(titulo, autor, anoPublicacao) {
//     this.titulo = titulo;

//     this.autor = autor;

//     this.anoPublicacao = anoPublicacao;

//     this.descricao = () => {
//         return String(`Eu li o livro ${this.titulo}, do/a ${this.autor} que foi publicado no ano de ${this.anoPublicacao}`);
//     };
// }

// const livro = new Livro('Poder do habito', 'Charles Duhing', 2006);
// console.log(livro.descricao());


// ##########################################################


// function Produto(nome, preco, quantidade) {
//     this.nome = nome;
//     this.preco = preco;
//     this.quantidade = quantidade;

//     this.adicionaEstoque = () => {
//         return this.quantidade += this.quantidade.push();
//     };


//     this.removeEstoque = () => {
//         return this.quantidade += this.quantidade.shift();
//     };  

//     this.descricao = () => {
//         return `${this.quantidade}`;
//     }
// }      

// const produto = new Produto();
// console.log(produto.descricao());

//################################################################################


function Ventilador(velMax) {
    this.velocidadeMaxima = velMax;
    this.ligado = false;
}

const ventlador1 = new Ventilador(3)
console.log(ventlador1.velocidadeMaxima);