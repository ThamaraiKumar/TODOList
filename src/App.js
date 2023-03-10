import './App.css';
import Title from './Project/Title';
import Todofile from './Project/Todofile';
import Form from './Project/Form';
import React,{useState, useEffect} from 'react';

function App() {
  const initialState=JSON.parse(localStorage.getItem("todo")) || [];
    const[input,setInput]=useState("");
    const[todo,setTodo]=useState(initialState);
    const[edit,setEdit]=useState(null);
    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(todo));
    }, [todo])
  return (
    <div className="container">
    <div className='app-cover'>
    <Title/>
    <Form input={input}
    setInput={setInput}
    todo={todo}
    setTodo={setTodo}
    edit={edit}
    setEdit={setEdit}
    />
    <div><Todofile todo={todo} setTodo={setTodo} setEdit={setEdit}/></div>
      </div>
    </div>
  );
}

export default App;
