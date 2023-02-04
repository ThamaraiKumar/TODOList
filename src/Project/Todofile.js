import React from 'react'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function Todofile({todo,setTodo,setEdit}) {
    const handleComplete=(todo)=>{
        setTodo(todo.map((item)=>{
            if(item.id===todo.id){
                return{...item,completed:!item.completed}
            }
            return item;
        }));
    }
    const handleEdit=({id})=>{
        const findTodo=todo.find((todo)=>todo.id===id);
        setEdit(findTodo);
    }
    const handleDelete=({id})=>{
        setTodo(todo.filter((todo)=>todo.id!==id));
    }
  return (
    <div> 
    {todo.map((todo)=>(<li id="list-item" key={todo.id}>
    <input type="text" value={todo.title} id={"list {todo.completed}" ? "complete" : ""} 
    onChange={(event)=>event.preventDefault()}/>
    <div>
    <button id="button-complete" 
    onClick={()=>handleComplete(todo)}>
    <DoneOutlineOutlinedIcon/>
    </button>
    <button id="button-update" 
    onClick={()=>handleEdit(todo)}>
    <EditOutlinedIcon/>
    </button>
    <button id="button-delete" 
    onClick={()=>handleDelete(todo)}>
    <RemoveCircleOutlineIcon/>
    </button>
    </div>
    </li>))}
    </div>
  )
}
export default Todofile