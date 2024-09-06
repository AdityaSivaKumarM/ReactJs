
import React from 'react'
import { useState } from 'react'

const UseMemoHook = () => {
    const [list,setList] = useState([]);
    const [message,setMessage]=useState({
        id:"",
        text:""
    });
    const [editingItem,setEditingItem] = useState({
        id:"",
        isEditing:false
    });
    const changeMessage=(e)=>{
        setMessage({
            ...message,
            text:e.target.value,
            completed:false
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let newTodo = {
            text:message.text,
            id:new Date().getTime().toString(),
            completed:false
        }
        setList([...list,newTodo]);
        setMessage({
            text:"",
            id:""
        })
    }
    const handleDelete = (id)=>{
        let newTodos = list.filter((eachItem)=>{
            return eachItem.id != id
        })
        setList(newTodos);
    }
    const changeEditState = (id) => {
        setEditingItem({
        ...editingItem,
        id:id,
        isEditing:true
        })
        let editableItem = list.find((eachItem)=> eachItem.id == id);
        setMessage({
            ...message,
            id:editableItem.id,
            text:editableItem.text
        })
    }
    const handleEdit = (e) => {
        e.preventDefault();
        console.log("previous todos", list);
        let newTodos = list.map((eachItem) => {
          if (eachItem.id === editingItem.id) {
            return {
              text: message.text,
              id: editingItem.id,
            };
          } else {
            return eachItem;
          }
        });
        setList(newTodos);
        setMessage({
          text: "",
          id: "",
        });
        setEditingItem({
          id: "",
          isEditing: false,
        });
      };
      //toggle completed
 function toggleCompleted(id) {
    setList(list.map(eachItem => {
    if (eachItem.id === id) {  
        console.log(!eachItem.completed);  
    return {...eachItem, completed: !eachItem.completed};
    } else {
    return eachItem;
    } 
    }));
    }
    // handle change
    function handleChange(eachItem) {
      toggleCompleted(eachItem.id);
      }
  return (
    <div>
    <form>
    <input type='text' placeholder='enter text' name='text' value={message.text} onChange={changeMessage}></input>
    {!editingItem.isEditing ? (
        <button type='submit' onClick={handleSubmit}>Add</button>)
        :(<button type='submit' onClick={handleEdit}>Edit</button>)
    }
    </form>
    <hr />
      {list.length === 0 && <h4>There is no items in the list</h4>}
      <ul>

        {list.map((eachItem) => {
            const {text, id ,completed} = eachItem
       return ( 
      <li key={id} style={{ listStyleType: "none" }}>
        <input type="checkbox" checked={eachItem.completed} onChange={()=>handleChange(eachItem)}/>
      <span>{text}</span>
      <button type='submit' onClick={() => changeEditState(id)}>Edit</button>
      <button type='submit' onClick={() => handleDelete(id)}>Delete</button>
        
      </li>
       );
      })}   
      </ul>
    </div>
  )
}

export default UseMemoHook
