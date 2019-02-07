import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        key: '',
        text: ''
      }
    }
  }

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {  
      const items = [...this.state.items, newItem];

      this.setState({
        items: items,
        currentItem: {
          key: '',
          text: ''
        }
      });
    }
  }

  handleInputChange = (event) => {
    console.log('looks like there is an input change...');
    const itemText = event.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now()
    }
    this.setState({ 
      currentItem: currentItem
    })
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
        <TodoItems entries={this.state.items}/>
      </div> 
    );
  }
}

export default App;
