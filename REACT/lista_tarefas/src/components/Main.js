import React, { Component } from 'react'; // Importa React e Component para criar o componente de classe

// Form
import { FaPlus } from 'react-icons/fa'; // Importa ícone "plus" da biblioteca de ícones

import './Main.css'; // Importa o arquivo de estilos CSS

export default class Main extends Component {
  // Define o estado inicial da classe (novaTarefa)
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Beber  agua',
      'Estudar',
    ],
  };

  // Atualiza o estado conforme o input é preenchido
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value, // Atualiza novaTarefa com o valor do input
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state; // Desestrutura novaTarefa do estado

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    );
  }
}
