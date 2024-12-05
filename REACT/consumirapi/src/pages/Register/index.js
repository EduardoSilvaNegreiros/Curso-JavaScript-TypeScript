import React, { useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form>
        <label htmlFor="nome">
          Nome:
          <input type="text" />
        </label>
      </Form>
    </Container>
  );
}
