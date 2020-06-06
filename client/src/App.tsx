import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    address: {
      cep: "",
      city: "",
      neighborhood: "",
      state: "",
      street: ""
    },
    cepInput: ""
  }

  onInputChange(event: any) {
    this.setState({
      cepInput: event.target.value
    }) 
  }

  handleSubmit(event: any) {
    fetch(`http://localhost:3001/cep?value=${this.state.cepInput}`)
      .then(
        res => res.json()
      ).then(addressFromApi => {
        this.setState({
          address: addressFromApi
        })
      })
      .catch(error => {
        console.log(error);
      })
      ;

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Jatobá's CEP App!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>CEP: </label>
          <input onChange={event => this.onInputChange(event)} />
          <input type="submit" value="Send CEP" />
        </form>
      </div>
    )

  };
}

export default App;
