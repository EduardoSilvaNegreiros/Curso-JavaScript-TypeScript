const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = ['São', 'Ou', 'Não', 'São', 'Eles', '?'];
// const a3 = a1.concat(...a2, 'Dudu', 'Chama', 123455555556);
// ... rest -> ... spread
const a4 = [...a1, ...a2, ...a3, ...[7, 8, 9]]
console.log(a4);