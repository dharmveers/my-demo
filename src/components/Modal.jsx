import React, { useEffect, useState } from 'react'
import TodoDataServices from '../services/todo.service';
import { toast } from 'react-toastify';
export const Model = ({ id, setTodoId }) => {
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

    const handleSubmit = async (e)=>{
        await TodoDataServices.updateTodo(id,user)
                                  .then(setUser({ ...user, title: "", description: "",status: ""}));
                                  toast.success("Records Updated successFully",{position:"top-center"});
                                  setTodoId("");
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h5 className="modal-title" id="exampleModalLabel">Update Records Here</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-success">
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

                                <div classname="modal-footer text-center">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-warning m-1">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
