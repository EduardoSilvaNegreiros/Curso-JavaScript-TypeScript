import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Tittle, Paragrafo } from './styled';
import * as exampleAction from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleAction.clicaBotaoRequest());
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
