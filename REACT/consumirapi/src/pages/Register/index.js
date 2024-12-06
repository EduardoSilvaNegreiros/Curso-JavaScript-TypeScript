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
          <input type="text" 
          value={nome} 
          onChange={e => setNome(e.target.value)} 
          placeholder='Seu nome'
          />
        </label>

        <label htmlFor="nome">
          Nome:
          <input type="text" 
          value={nome} 
          onChange={e => setNome(e.target.value)} 
          placeholder='Seu email'
          />
        </label>

        <label htmlFor="nome">
          Nome:
          <input type="text" 
          value={nome} 
          onChange={e => setNome(e.target.value)} 
          placeholder='Sua senha'
          />
        </label>
      </Form>
    </Container>
  );
}
