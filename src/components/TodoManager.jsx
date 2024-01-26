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
    const handleReset=()=>{
        setUser({ ...user, title: "", description: "",status: ""});
        setTodoId("");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(user);
            await TodoDataServices.addTodo(user)
                                  .then(setUser({ ...user, title: "", description: "",status: ""}));
                                  toast.success("Records saved successFully",{position:"top-center"});
    }
    return (
        <div>
                <div><h1>Task Management</h1></div>
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
                        rows={3}
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
                    <div className="form-group d-block">
                    <button type="submit" className='btn btn-success m-1'>Add Task</button>
                    <button type="reset" onClick={handleReset} className="btn btn-primary m-1">Reset</button>
                    </div>
                </form>
        </div>
    )
}

export default TodoManager;