// Importa a função 'styled' da biblioteca 'styled-components', que permite criar componentes de estilo.
import styled from 'styled-components';

// Cria e exporta um componente chamado 'Tittle' que é uma tag HTML <h1> estilizada.
// eslint-disable-next-line import/prefer-default-export
export const Tittle = styled.h1`
  // Define a cor do texto, com base em uma propriedade 'isRed' passada para o componente.
  // Se 'props.isRed' for verdadeira, a cor será 'red' (vermelha), caso contrário, será 'blue' (azul).
  color: ${props => (props.isRed ? 'red' : 'blue')};
`;
