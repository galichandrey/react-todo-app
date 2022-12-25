import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import ItemStatus from './components/item-status-filter';

import "./index.css";

const App = () => {

  const todoData = [
    {label: 'Drink Tasty Tea', important: false, id: 1},
    {label: 'Make Awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ];

  // const isLoggedIn = false;
  // const loginBox = <span>Log in, please</span>;
  // const welcomeBox = <span>Welcome Back</span>

  return (
    <div className="todo-app">
      <AppHeader toDo="1" done="3" />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatus />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// { isLoggedIn ? welcomeBox : loginBox }