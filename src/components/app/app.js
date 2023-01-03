import React, { Component } from "react";

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatus from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      {label: 'Drink Tasty Tea', important: false, id: 1},
      {label: 'Make Awesome App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3}
    ]
  };

  addItem = (text) => {
    //  Generate unique id
    
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    // Add new element to array
    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      };
    })

  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      
      const index = todoData.findIndex((element) => element.id === id);

      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);

      const newArray = [
        ...before, ...after
      ];

      return {
        todoData: newArray
      }

    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo="1" done="3" />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatus />
        </div>
        
        <TodoList todos={this.state.todoData}
        onDeleted={ this.deleteItem }/>
        
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    );
  }

}