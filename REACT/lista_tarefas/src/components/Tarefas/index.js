import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => this.handleEdit(e, index)}
            />
            <FaWindowClose
              onClick={(e) => this.handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
