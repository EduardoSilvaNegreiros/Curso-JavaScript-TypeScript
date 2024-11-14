import React from 'react';

import { Container } from '../../styles/GlobalStyles';

import { Tittle, Paragrafo } from './styled';

export default function Login() {
  React.useEffect(() => { }, []);

  return (
    <Container>
      <Tittle>
        <small>Oie</small>
      </Tittle>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
