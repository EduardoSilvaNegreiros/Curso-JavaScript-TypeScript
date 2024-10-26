import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa'; // Importa o ícone "plus" (FaPlus) da biblioteca react-icons.

import './Form.css'; // Importa o arquivo CSS para estilização do formulário.

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    // Formulário que executa 'handleSubmit' quando o formulário é enviado (onSubmit).
    <form onSubmit={handleSubmit} action="#" className="form">
      {/* Campo de texto que chama 'handleChange' sempre que o conteúdo do input mudar. */}
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa} // O valor do input é controlado pela variável 'novaTarefa'.
      />
      {/* Botão de submit que exibe o ícone FaPlus e submete o formulário. */}
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Define os tipos de propriedades esperadas e marca 'handleChange' como obrigatório.
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
