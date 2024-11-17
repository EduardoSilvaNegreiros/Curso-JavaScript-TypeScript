import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Tittle, Paragrafo } from './styled';

export default function Login() {
  // Obtém a referência para a função dispatch do Redux
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    // Dispara uma ação para o Redux (mas não está enviando nenhuma ação atualmente)
    dispatch();
  }

  // Retorna o JSX do componente
  return (
    <Container>
      <Tittle>
        <small>Oie</small>
      </Tittle>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
