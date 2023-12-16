

import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoManager from './components/TodoManager';


function App() {
  const[todoId,setTodoId] = useState("");
  const getTodoHandler=(id)=>{
      setTodoId(id);
      console.log(id);
  }
  return (
    <div className="App">
        <TodoManager id={todoId} setTodoId={setTodoId}/>
        <TodoList getTodoId={getTodoHandler}/>
    </div>
  );
}

export default App;
