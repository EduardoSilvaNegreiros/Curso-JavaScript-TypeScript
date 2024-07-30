//  Função construtora -> objetos
// Função Fabrica -> objetos
// Construtora -> Pessoa (new) - Tem que começar a palavra maiúscula

function Pessoa(nome, sobrenome) {
    const ID = 123456;


    const metodoInterno = () => {
        
    };


    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;


    this.metodo = function () {
        console.log(this.nome + ' :sou um método');
    }
}



const p1 = new Pessoa('Syang', 'Sousa');
console.log(p1.nome, p1.sobrenome);
p1.metodo();
