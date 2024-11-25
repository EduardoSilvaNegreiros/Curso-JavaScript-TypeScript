import React, { useEffect, useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      {alunos.map(aluno => aluno.nome)}
    </Container>
  );
}
