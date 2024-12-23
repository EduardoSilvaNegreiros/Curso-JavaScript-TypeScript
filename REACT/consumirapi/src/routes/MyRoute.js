// 1️⃣ Importação de Dependências
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// 2️⃣ Definição do Componente MyRoute
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  // 3️⃣ Verificação de Autenticação
  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { prevPath: rest.location.pathname }, // Salva o caminho de onde o usuário estava antes
        }}
      />
    );
  }

  // 4️⃣ Renderização da Rota
  return <Route {...rest} component={Component} />;
}

// 5️⃣ Definição de Propriedades Padrão
MyRoute.defaultProps = {
  isClosed: false,
};

// 6️⃣ Validação de Propriedades
MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};