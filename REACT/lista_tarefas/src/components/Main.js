import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <h1>Meu componente com estado</h1>;
        <form action="#">
          <input type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
