import React, { useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form>
        <label htmlFor="nome">
          Nome:
          <input type="text" 
          value={nome} 
          onChange={e => setNome(e.target.value)} 
          placeholder='Seu nome'
          />
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder='Seu email'
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder='Sua senha'
          />
        </label>
      </Form>
    </Container>
  );
}
