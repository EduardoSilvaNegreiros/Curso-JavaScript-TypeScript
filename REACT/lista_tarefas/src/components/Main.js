import React, { Component } from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa'; // Ícones de edição e exclusão
import Form from './Form'; // Componente de formulário
import './Main.css'; // Estilos CSS

export default class Main extends Component {
  // Estado inicial
  state = {
    novaTarefa: '', // Tarefa que está sendo adicionada ou editada
    tarefas: [], // Lista de tarefas
    index: -1, // Índice da tarefa que está sendo editada
  };

  // Carrega tarefas do localStorage ao montar o componente
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({ tarefas });
  }

  // Atualiza o localStorage quando as tarefas mudam
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // Lida com o envio do formulário
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    // Verifica se a tarefa já existe
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    // Adiciona nova tarefa ou edita tarefa existente
    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  // Atualiza o estado conforme o input é preenchido
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  // Edita tarefa selecionada
  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  // Exclui tarefa selecionada
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1); // Remove a tarefa pelo índice
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  // Renderiza a interface
  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

      </div>
    );
  }
}
