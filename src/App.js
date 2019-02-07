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

  inputElement = React.createRef();

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

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  }

  handleInputChange = (event) => {
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
        <div className="mid-column">
          <Title />
          <TodoList 
            addItem={this.addItem} 
            inputElement={this.inputElement}
            handleInputChange={this.handleInputChange}
            currentItem={this.state.currentItem}
          />
          <TodoItems 
            entries={this.state.items}
            deleteItem={this.deleteItem} 
          />
        </div>
      </div> 
    );
  }
}

export default App;
