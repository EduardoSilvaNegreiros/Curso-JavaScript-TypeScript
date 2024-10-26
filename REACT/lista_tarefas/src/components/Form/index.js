import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa'; // Ícone "plus" da biblioteca react-icons.
import './Form.css'; // Estilos CSS para o formulário.

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form"> {/* Envia o formulário ao chamar 'handleSubmit' */}
      <input
        onChange={handleChange} // Atualiza o estado com o novo valor do input
        type="text"
        value={novaTarefa} // Controla o valor do input
      />
      <button type="submit"> {/* Botão de envio do formulário */}
        <FaPlus /> {/* Ícone de adição */}
      </button>
    </form>
  );
}

// Define tipos de propriedades esperadas e marca 'handleChange' como obrigatório
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa  : PropTypes.func.isRequired,
};
