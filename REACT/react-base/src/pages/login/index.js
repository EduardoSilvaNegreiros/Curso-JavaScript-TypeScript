import React from 'react'; // Importa a biblioteca React, necessária para criar componentes React.

import { Tittle } from './styled'; // Importa o componente Tittle (título) de um arquivo de estilos.

export default function Login() {
  // Define e exporta a função Login como um componente padrão.
  return (
    // Início do retorno do componente, que deve retornar JSX.
    <>
      {/* Fragmento React, utilizado para agrupar múltiplos elementos sem adicionar nós extras ao DOM. */}
      <Tittle isRed={false}>
        {' '}
        <small>Oie</small>
      </Tittle>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  ); // Fim do retorno do componente.
}
