import React,{FC} from "react";
import UpdateTodo, { TodoListProps } from "./UpdateTodo";

export interface TodoProps {
    id : number;
    title : string;
}
const Todo :FC<TodoListProps> = ({id,title,todos,setTodos}) =>{
      return  <li><UpdateTodo id ={id} title ={title} todos ={todos} setTodos ={setTodos}/></li>;
}

export default Todo;