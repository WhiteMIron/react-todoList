import React ,{FC, useState} from "react";
import AddTodo from "./AddTodo"
export interface ITodo {
   id : number;
   title : string; 
}

const TodoList :FC =()=>{
    const [todos,setTodos] = useState<ITodo[]>([
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
                return  <li key={todo.id}>{todo.title}</li>
           })}
        </ul>
        </>
    );
};

export default TodoList;