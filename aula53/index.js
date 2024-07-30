// function soma(a, b) {
//     return a + b;
// }
// console.log(soma(5, 2));

// function soma2(a, b) {
//     console.log(a + b);
// }

// soma2(5, 2)

// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'Red'
// });


// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome };
// }
// const p1 = criaPessoa('Eduardo', 'Negreiros');

// console.log(typeof p1);

// const p2 = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// }
// console.log(typeof p2);

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }


// const fala = falaFrase('Olá');
// const resto = fala('Mundo!');
// console.log(resto);

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
const quintuplica = criaMultiplicador(5);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
console.log(quintuplica(5));


