import React,{FC} from "react";
import { TodoListProps } from "./UpdateTodo";

const DeleteTodo :FC<TodoListProps> = ({id,title,todos,setTodos}) =>{

    const  onClickDelteTodo = () =>{
        setTodos(
            todos.filter( (todo)=>{
                return id  !==todo.id;
            })
        )
    }
    return(
        <button onClick ={onClickDelteTodo}>delete</button>
    );

}

export default DeleteTodo;