import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className="container">
      <h1>Todo's</h1>
      <ToDoList />
    </div>
  );
}

export default App;
