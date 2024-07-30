// const numbers = [5, 12, 8, 130, 44];
// const numerosFiltrados = numbers.filter(obj => obj > 10);
// console.log(numerosFiltrados);


// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const letras = words.filter(obj => obj.length > 5);
// console.log(letras);


// const people = [
//     { name: "John", age: 20 },
//     { name: "Jane", age: 15 },
//     { name: "Peter", age: 23 },
//     { name: "Mary", age: 17 },
// ];
// const idade = people.filter(obj => obj.age > 18);
// console.log(idade);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numerosPares = numbers.filter(obj => obj % 2 === 0);
// console.log(numerosPares);

const produtos = [
    { nome: "Camiseta", preco: 20, stock: 5 },
    { nome: "Calça", preco: 40, stock: 0 },
    { nome: "Sapato", preco: 60, stock: 10 },
    { nome: "Boné", preco: 15, stock: 2 }
];
const estoque = produtos.filter(obj => obj.stock > 0);
console.log(estoque);