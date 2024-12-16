import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login() {
  return (
    <Container>
      <h1>Login</h1>

      <Form>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Seu e-mail'
        />
      </Form>
    </Container>
  );
}
