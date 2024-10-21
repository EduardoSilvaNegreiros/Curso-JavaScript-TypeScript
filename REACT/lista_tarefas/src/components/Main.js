import React, { Component } from 'react'; // Importa React e Component para criar o componente de classe

// Form
import { FaPlus } from 'react-icons/fa'; // Importa ícone "plus" da biblioteca de ícones

import './Main.css'; // Importa o arquivo de estilos CSS

export default class Main extends Component {
  // Define o estado inicial da classe (novaTarefa)
  state = {
    novaTarefa: '', // Variável que armazena a nova tarefa
  };

  // Função para atualizar o estado (novaTarefa) conforme o input é preenchido
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value, // Atualiza o valor da tarefa com o input do usuário
    });
  }

  render() {
    const { novaTarefa } = this.state; // Extrai novaTarefa do estado

    return (
      <div className="main">
        <h1>Lista de tarefas</h1> {/* Título da página */}
        <form action="#" className="form"> {/* Formulário para adicionar tarefas */}
          <input onChange={this.handleChange} type="text" /> {/* Input para digitar a tarefa */}
          <button type="submit">
            <FaPlus /> {/* Botão com ícone de adição */}
          </button>
        </form>
      </div>
    );
  }
}
