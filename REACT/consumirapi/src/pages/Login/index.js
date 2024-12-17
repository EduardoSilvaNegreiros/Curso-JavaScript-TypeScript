import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;
  };

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha"
        />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
