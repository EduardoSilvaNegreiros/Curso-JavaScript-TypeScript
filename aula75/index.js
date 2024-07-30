const produto = { nome: 'Produto', preco: 1.8 };

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// })

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));



for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}