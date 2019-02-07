import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  addItem = (event) => {
    event.preventDefault();
    console.log('added item!');
  }

  render() {
    return (
      <div className="wrapper">
        <Title />
        <TodoList addItem={this.addItem} />
      </div> 
    );
  }
}

export default App;
