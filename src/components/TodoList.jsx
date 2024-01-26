import React, { useEffect, useState } from 'react'
import todoService from '../services/todo.service'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const TodoList = ({getTodoId}) => {
    const[todo,setTodo] = useState([]);
   useEffect(()=>{
    getAllDetais();
   },[todo])
   async function deleteTodo(id){
    await todoService.deleteTodo(id).then(toast.success("Records Deleted Successfully",{position:"bottom-center"}));
   }

   const getAllDetais=async()=>{
        const data=await todoService.getAllTodo();
        setTodo(data.docs.map((doc)=>({ ...doc.data(), id:doc.id})));
   }

  return (
    <div>
        <div><h1>Task Overview</h1></div>
            <div className="table-responsive p-3">
                <table className="table table-striped table-success">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                        todo.map((obj)=>(
                            <tr key={obj.id}>
                                <td>{obj.title}</td>
                                <td>{obj.description}</td>
                                <td>{obj.status}</td>
                                <td style={{whiteSpace:"nowrap"}}>
                                <button className='btn btn-danger btn-small' onClick={()=>deleteTodo(obj.id)}>Delete</button>
                                <button className="btn btn-warning btn-small ms-1" onClick={()=>getTodoId(obj.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                                <ToastContainer/>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default TodoList