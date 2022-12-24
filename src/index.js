import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {

  const todoData = [
    {label: 'Drink Tasty Tea', important: false},
    {label: 'Make Awesome App', important: true},
    {label: 'Have a lunch', important: false}
  ];

  const isLoggedIn = false;
  const loginBox = <span>Log in, please</span>;
  const welcomeBox = <span>Welcome Back</span>

  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));