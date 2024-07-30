// defineProperty -> Getters e Setters 
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar o valor ou não 
        configurable: false // poder reconfigurar a chave 
    });

    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true, // mostra a chave
    //         value: nome, // valor
    //         writable: true, // pode alterar o valor ou não 
    //         configurable: true // poder reconfigurar a chave     
    //     },

    //     preco: {
    //         enumerable: true, // mostra a chave
    //         value: preco, // valor
    //         writable: true, // pode alterar o valor ou não 
    //         configurable: true // poder reconfigurar a chave     
    //     }
    // });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}