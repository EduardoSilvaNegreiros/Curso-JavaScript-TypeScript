// // arguments que sustenta todos os argumentos enviados
// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
//     // let total = 0;
//     // for (let argumento of arguments) {
//     //     total += argumento
//     // }

//     // console.log(total, a, b, c);
// }
// funcao(['Eduardo Silva de', 'Negreiros', 18]);

const conta = (...args) => {
    // for (let numero of numeros) {
    //     if (operador === '+') acumulador += numero;
    //     if (operador === '-') acumulador -= numero;
    //     if (operador === '/') acumulador /= numero;
    //     if (operador === '*') acumulador *= numero;
    // }
    // console.log(acumulador);
    console.log(args);
};
conta('-', 1, 4, 3, 7); 