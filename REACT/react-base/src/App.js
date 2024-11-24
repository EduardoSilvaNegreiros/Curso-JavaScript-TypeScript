import React from 'react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    // Provedor do Redux que fornece o estado global para a aplicação
    <Provider store={store}>
      {/* Garante a reidratação do estado persistido antes de renderizar */}
      <PersistGate persistor={persistor}>
        {/* Configuração de rotas com histórico customizado */}
        <Router history={history}>
          <Header /> {/* Cabeçalho da aplicação */}
          <Routes /> {/* Definição das rotas */}
          <GlobalStyles /> {/* Estilos globais */}
          {/* Notificações (toasts) com tempo de exibição configurado */}
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
