// Definindo um objeto com tipos específicos para suas chaves
const objectA: {
  // A chave 'keyA' é somente leitura, o que significa que seu valor não pode ser alterado após a atribuição inicial.
  readonly keyA: string;

  // 'keyB' é uma chave mutável, que pode ser alterada após a atribuição inicial.
  keyB: string;

  // 'keyC' é opcional, o que significa que o objeto pode ou não ter essa chave.
  keyC?: string;

  // 'Index Signature' permite que o objeto tenha outras chaves de tipo desconhecido.
  [key: string]: unknown; // Permite adicionar outras chaves de qualquer tipo, mas essas não são verificadas.
} = {
  // Atribuindo valores iniciais ao objeto.
  keyA: 'Value A', // O valor de 'keyA' é fixo e não pode ser alterado devido ao 'readonly'
  keyB: 'Value B', // 'keyB' pode ser alterada
};

// Modificando a chave 'keyB'. Isso é permitido, pois 'keyB' não é 'readonly'.
objectA.keyB = 'Another Value';

// Exibindo o objeto modificado.
console.log(objectA);

// Comentário sobre tentativas de modificar ou adicionar chaves não existentes

// A linha abaixo está comentada, pois o TypeScript não permite adicionar novas chaves ao objeto,
// caso essas chaves não estejam previamente definidas na interface ou no tipo do objeto.
// objectA.keyC = 'New Key'; // Não é permitido, pois 'keyC' já é opcional e não pode ser alterada diretamente.

// Também não é permitido adicionar 'keyD', já que o TypeScript só permite a adição de chaves que
// foram especificadas ou que estão permitidas pela 'Index Signature'.
// objectA.keyD = 'New Key 2 '; // Esta linha não gera erro, mas a chave 'keyD' não existe no objeto originalmente.

// Algumas boas práticas sobre design de objetos:

// 1. Melhorar o design do objeto criando-o de uma vez, com todas as chaves definidas de forma clara,
//    ao invés de adicionar chaves de forma ad-hoc.

// 2. Quando for necessário um objeto mais flexível (mas ainda com controle de tipo), utilizar 'Index Signatures',
//    mas sempre com cautela para não perder o controle sobre os tipos dos dados inseridos.
