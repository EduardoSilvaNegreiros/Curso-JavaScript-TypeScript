// Importa a biblioteca React, que é essencial para trabalhar com componentes em uma aplicação React.
import React from 'react';

// Importa o componente "Login" da pasta "pages". Este componente será exibido dentro do componente App.
import Login from './pages/Login';

// Define o componente funcional "App", que retorna o componente "Login".
// Ou seja, quando o "App" for renderizado, o componente "Login" será exibido na tela.
function App() {
  return <Login />;
}

// Exporta o componente "App" como padrão, permitindo que ele seja utilizado em outros arquivos.
export default App;
