import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login() {
  const [email, setEmail] = React.useState('');

  return (
    <Container>
      <h1>Login {email}</h1>

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
