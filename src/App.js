import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Title />
        <TodoForm />
        <TodoList />
      </div> 
    );
  }
}

export default App;
