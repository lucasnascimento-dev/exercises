import React, { Component } from "react";

class Form extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
    };
  this.handlerChange = this.handlerChange.bind(this);
  }
  
  handlerChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    // Buscamos o valor do email do nosso estado
    const { email } = this.state;

    return (
      <div>
        <h1> Estados e React - Tecnologia fantástica reagindo a regionalismos?</h1>
        <form className="form">

          <label htmlFor="name">
            Nome:
            <input 
              id="name"
              name="name"
              type="text"
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
            id="email"
            name="email"
            type="email"
 
            /*usamos a função handleChange no campo do nosso input */
            onChange={ this.handlerChange }
            
            /* Usamos o valor do email do estado no campo value do nosso input */
            value={ email }
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select 
              id="age"
              name="age"
              defaultValue=""
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea 
              id="anecdote"
              name="anecdote"
            />
          </label>

        </form>
      </div>
    )
  }
}

export default Form;
