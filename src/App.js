

import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoManager from './components/TodoManager';
import { Model } from './components/Modal';


function App() {
  const[todoId,setTodoId] = useState("");
  const getTodoHandler=(id)=>{
      setTodoId(id);
      console.log(id);
  }
  return (
    <div className="App">
        <Model  id={todoId} setTodoId={setTodoId}/>
        <div className='container-fluid pt-5'>
            <div className='row'>
                <div className='col-md-4 offset-1'>

                <TodoManager/>
                </div>
                <div className='col-md-6'>
                <TodoList getTodoId={getTodoHandler}/>
                </div>

            </div>

        </div>
    </div>
  );
}

export default App;
