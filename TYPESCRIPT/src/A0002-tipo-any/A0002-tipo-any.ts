// Evite o uso de 'any' sempre que possível, pois ele desativa a verificação de tipos do TypeScript
// 'any' deve ser utilizado apenas como último recurso, quando não for possível definir um tipo mais específico.
function showMessage(msg: any) {
  return msg;
}

// Exemplo de uso: passando um array. O TypeScript não faz a verificação de tipo quando 'any' é utilizado.
console.log(showMessage([1, 2, 3])); // Array de números

// Exemplo de uso: passando uma string. Não há verificação de tipo para garantir que o valor seja uma string.
console.log(showMessage('Olá')); // String

// Exemplo de uso: passando um número. O uso de 'any' permite passar qualquer tipo sem restrições.
console.log(showMessage(1234)); // Número
