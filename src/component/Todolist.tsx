import React ,{FC, useState} from "react";
import AddTodo from "./AddTodo"
import Todo,{TodoProps} from "./Todo";

export interface ITodo {
   id : number;
   title : string; 
}

const TodoList :FC =()=>{
    const [todos,setTodos] = useState<TodoProps[]>([
       {
        id:1,
        title:"Eat"
       },
       {
        id:2,
        title:"Pray"
       },
       {
        id:3,
        title:"Love"
       }
    ]);
    return (
        <>
        <AddTodo todos={todos} setTodos={setTodos}/>
        <ul>
            {todos.map((todo)=>{
            return <Todo id ={todo.id} title={todo.title} key ={todo.id}> </Todo>
         })}
        </ul>
        </>
    );
};

export default TodoList;