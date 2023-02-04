import { useEffect, useState } from "react";
import React from 'react'
import Form from "./Form";
import Todofile from "./Todofile";

function Hooks() {
    const initialState=JSON.parse(localStorage.getItem("todo")) || [];
    const[input,setInput]=useState("");
    const[todo,setTodo]=useState(initialState);
    const[edit,setEdit]=useState(null);
    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(todo));
    }, [todo])
  return (
    <div>
    <Form input={input}
    setInput={setInput}
    todo={todo}
    setTodo={setTodo}
    edit={edit}
    setEdit={setEdit}
    />
    <div><Todofile todo={todo} setTodo={setTodo} setEdit={setEdit}/></div>
    </div>
  )
}

export default Hooks