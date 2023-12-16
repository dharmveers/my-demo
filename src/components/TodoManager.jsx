import React, { useEffect, useState } from 'react'
import '../components/style.css';
import TodoDataServices from '../services/todo.service';
import { toast } from 'react-toastify';

const TodoManager = ({id ,setTodoId}) => {
    useEffect(()=>{
        getTodoRecords();
    },[id])

    const [user, setUser] = useState({
        title: "",
        description: "",
        status: ""
    });

    const getTodoRecords=async()=>{
        if(id){
            const snap=await TodoDataServices.getTodo(id);
            setUser(snap.data());
        }
    }

    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(user);
        if(id==="" || id===undefined){
            await TodoDataServices.addTodo(user)
                                  .then(setUser({ ...user, title: "", description: "",status: ""}));
                                  toast.success("Records saved successFully",{position:"top-center"});
        }else{
            await TodoDataServices.updateTodo(id,user)
                                  .then(setUser({ ...user, title: "", description: "",status: ""}));
                                  toast.success("Records Updated successFully",{position:"top-center"});
                                  setTodoId("");
                                  
        }

    }
    return (
        <div>
            <div className="container">
                <div className="header"><h2>Task Management</h2></div>
                <form onSubmit={handleSubmit} className='form-group' method='post'>

                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        value={user.title}
                        onChange={getUserData}
                        required
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        rows={6}
                        name='description'
                        value={user.description}
                        onChange={getUserData}
                        required
                    />

                    <label htmlFor="status">Status:</label>
                    <select id="status" name='status' value={user.status} onChange={getUserData}>
                        <option value="" disabled>select</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                    {
                        id?<button type="submit">Update</button>:<button type="submit">Add Task</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default TodoManager;