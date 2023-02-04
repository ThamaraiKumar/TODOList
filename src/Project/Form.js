import React, { useEffect } from 'react'

export default function Form({input,setInput,todo,setTodo,edit,setEdit}) {
    const UpdateTodo=(title,id,completed)=>{
        const newTodo=todo.map((todo)=>
            todo.id === id? { title,id,completed }:todo
        )
        setTodo(newTodo);
        setEdit("");
    }
    useEffect(()=>{
        if(edit){
            setInput(edit.title);
        }
        else{
            setInput("")
        }
    },[setInput,edit]);
    const onInputChange=(event)=>
    {
        setInput(event.target.value);
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!edit){
            setTodo([...todo,{id:Math.random()*1000,title:input,completed:false}])
            setInput("");
        }
        else{
            UpdateTodo(input,edit.id,edit.completed)
        }
    }
  return (
    <div>
    <form onSubmit={onFormSubmit}>
    <input type="text" placeholder='Enter a ToDo' id="task" 
    value={input} required onChange={onInputChange}/>
    <button id="button-add" type='submit'>{edit?"OK":"Add"}</button>
    </form>
    </div>
  )
}
