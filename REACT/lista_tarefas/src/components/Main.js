import React, { Component } from 'react'; // Importa React e Component para criar o componente de classe

// Form
import { FaPlus } from 'react-icons/fa'; // Importa ícone "plus" da biblioteca de ícones

import './Main.css'; // Importa o arquivo de estilos CSS

export default class Main extends Component {
  // Define o estado inicial da classe (novaTarefa)
  state = {
    novaTarefa: '', // Armazena a nova tarefa
  };

  // Atualiza o estado conforme o input é preenchido
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value, // Atualiza novaTarefa com o valor do input
    });
  }

  render() {
    const { novaTarefa } = this.state; // Desestrutura novaTarefa do estado

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        {' '}
        {/* Título da página */}
        <form action="#" className="form">
          {' '}
          {/* Formulário para adicionar tarefas */}
          <input onChange={this.handleChange} type="text" />
          {' '}
          {/* Input de texto para nova tarefa */}
          <button type="submit">
            <FaPlus />
            {' '}
            {/* Botão com ícone de adição */}
          </button>
        </form>
      </div>
    );
  }
}
