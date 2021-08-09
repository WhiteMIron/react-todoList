import React,{ChangeEvent, FC,FormEvent,useState} from "react";
import { SetStateAction,Dispatch } from "react";
import {TodoProps} from "./Todo"

export interface TodoListProps extends TodoProps {
    todos : TodoProps[];
    setTodos : Dispatch<SetStateAction<TodoProps[]>>;
}
const UpdateTodo :FC<TodoListProps> = ({id,title,todos,setTodos}) =>{

    const [updateToggle , setUpdateToggle] = useState<boolean>(false)
    const [updateTodoTitle, setUpdateTodoTitle] = useState<string>(title!);

    const onClickUpdateToggle = () =>{
        setUpdateToggle(!updateToggle);
    }
    const onChangeUpdateTodo =(e:ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setUpdateTodoTitle(value);
    }
    const onSubmitUpdateTodo = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        setTodos(
            todos.map((todo)=>{
            if(id === todo.id){
                return {id,title:updateTodoTitle};
            }
            return todo;
        })
        );
    }
    return <>
    {updateToggle ? (
    <form onSubmit={onSubmitUpdateTodo}>
        <input type="text" value ={updateTodoTitle} onChange={onChangeUpdateTodo} />
        <input type="submit" value ="confirm" />     
    </form>) :  (<div>{title}</div>)}
    
    <button onClick={onClickUpdateToggle}>{updateToggle ? "cancel":"update"}</button>
    </>
}

export default UpdateTodo;
