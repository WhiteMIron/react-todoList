import React ,{ChangeEvent, FC, FormEvent,Dispatch} from "react"
import { SetStateAction } from "react";
import { useState } from "react";
import {TodoProps} from "./Todo"

interface TodoListProps {
    todos : TodoProps[],
    setTodos : Dispatch<SetStateAction<TodoProps[]>>;
}

const AddTodo: FC<TodoListProps> = ({todos,setTodos})=>{
    
    const [addTodoTitle, setAddTodoTitle] = useState<string>("");
    const onChangeAddTodo = (e:ChangeEvent<HTMLInputElement>)=>{
        const {value} =e.target;
        setAddTodoTitle(value)
    };

    const onsubmitAddTodo = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(addTodoTitle){
            setTodos([...todos,{id:Date.now(), title:addTodoTitle}]);
            setAddTodoTitle("");
        }
    }

    return (
    <form onSubmit={onsubmitAddTodo}>
        <input type="text" value ={addTodoTitle} onChange ={onChangeAddTodo}/>
        <input type="submit" value ="add"/>
    </form>
    )
};

export default AddTodo;