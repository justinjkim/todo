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
      tasks: [],
      currentItem: {
        key: '',
        text: ''
      }
    }
  }

  addItem = (event) => {
    event.preventDefault();
    console.log('added item!');
  }

  handleInputChange = () => {
    console.log('looks like there is an input change...');
  }

  render() {
    return (
      <div className="wrapper">
        <Title />
        <TodoList 
          addItem={this.addItem} 
          inputElement={this.inputElement}
          handleInputChange={this.handleInputChange}
          currentItem={this.state.currentItem}
        />
      </div> 
    );
  }
}

export default App;
