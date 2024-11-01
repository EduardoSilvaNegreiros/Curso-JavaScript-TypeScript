import styled from 'styled-components';

export const Tittle = styled.h1`
  color: ${props => (props.isRed ? 'red' : 'blue')};
`;
