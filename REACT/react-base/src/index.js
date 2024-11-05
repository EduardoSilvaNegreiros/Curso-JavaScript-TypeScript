// Importa o React, que é necessário para criar componentes React.
import React from 'react';

// Importa o ReactDOM, que lida com a renderização de componentes React no DOM (Document Object Model) da página.
import ReactDOM from 'react-dom';

// Importa o componente principal 'App' da aplicação, que será renderizado.
import App from './App';

// Encontra o elemento HTML com o id 'root' no arquivo HTML (geralmente no index.html) e cria um ponto de montagem React.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Usa o método 'render' para renderizar o componente 'App' dentro do elemento 'root'.
root.render(
  // 'React.StrictMode' é uma ferramenta para destacar problemas potenciais na aplicação.
  // Ele não aparece visualmente, mas ativa verificações e alertas adicionais para ajudar a encontrar bugs.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
