import { db } from "../firebase";
import { getDoc,getDocs,addDoc,collection,updateDoc,deleteDoc,doc } from "firebase/firestore";

const todoRef= collection(db,"todoManager");

 class TodoDataServices{
    getAllTodo=()=>{
        return getDocs(todoRef);
    }
    addTodo=(newTodo)=>{
        return addDoc(todoRef,newTodo);
    }
    deleteTodo=(id)=>{
        return deleteDoc(doc(todoRef,id));
    }
    getTodo=(id)=>{
        return getDoc(doc(todoRef,id));
    }
    updateTodo=(id,newTodo)=>{
        const todoDoc=doc(db,"todoManager",id);
        return updateDoc(todoDoc,newTodo);
    }
}

export default new TodoDataServices();