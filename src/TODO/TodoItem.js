
import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 const cn = {color:'red'}
 return (
    
 <div className="todo-item">
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p>{task.text}</p>
<button style={cn} onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 );
}
export default TodoItem;
