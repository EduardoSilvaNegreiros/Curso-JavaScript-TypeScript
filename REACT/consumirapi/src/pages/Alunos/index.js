import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer } from '../Aluno/styled';
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

      <AlunoContainer>
        {alunos.map(aluno => (
          <div key={String(aluno.id)}>
            {get(aluno, 'Fotos[0].url')}
            <img src={aluno.Fotos[0].url} alt="" />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
