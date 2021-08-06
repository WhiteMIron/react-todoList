import React,{FC} from "react";

export interface TodoProps {
    id : number;
    title : string;
}
const Todo :FC<TodoProps> = ({id,title}) =>{
      return  <li>{title}</li>;
}

export default Todo;