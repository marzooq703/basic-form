import React, { Component } from 'react';
import './App.css';
import Form from './form';


class App extends Component {

  state = {
    field: {}
  };

  onChange = (updadedValue) => {
    this.setState({
      field: {
        ...this.state.field,
        ...updadedValue
      }
    });
  };

  render() {
    return (
      <div className="App" >
        <Form onChange={field => this.onChange(field)} />
        <p>
          {JSON.stringify(this.state.field, null, 2)}
        </p>
      </div>
    );
  }
}



export default App;
