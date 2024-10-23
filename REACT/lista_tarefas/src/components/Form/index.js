import React from 'react';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form() {
  return (
    <form onSubmit={this.handleSubmit} action="#" className="form">
      <input
        onChange={this.handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
