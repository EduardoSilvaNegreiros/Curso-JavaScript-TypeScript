// Importa a função 'styled' da biblioteca 'styled-components', que permite criar componentes de estilo.
import styled from 'styled-components';

// Cria e exporta um componente chamado 'Tittle' que é uma tag HTML <h1> estilizada.
// eslint-disable-next-line import/prefer-default-export
export const Tittle = styled.h1`
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;
