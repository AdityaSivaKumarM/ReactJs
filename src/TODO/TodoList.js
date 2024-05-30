
import React, { useState } from "react";
import TodoItem from "./TodoItem";
function TodoList() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([
  {
  id: 1,
  text: 'Doctor Appointment',
  completed: true
  },
  {
  id: 2,
  text: 'Meeting at School',
  completed: false
  }
  ]);
  // add task
 function addTask(text) {
  const newTask = {
  id: Date.now(),
  text,
  completed: false
  };
  setTasks([...tasks, newTask]);
  setText('');
  }

// delete task
 function deleteTask(id) {
  setTasks(tasks.filter(task => task.id !== id));
  }

//toggle completed
 function toggleCompleted(id) {
  setTasks(tasks.map(task => {
  if (task.id === id) {
  return {...task, completed: !task.completed};
  } else {
  return task;
  } 
  }));
  }
  // handle change
  function handleChange(task) {
    toggleCompleted(task.id);
    }
const cn = {color:'red'}
 return (
  <div className="todo-list">
  {tasks.map(task => (
  // <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
  <div className="todo-item">
  <input type="checkbox" checked={task.completed} onChange={()=>handleChange(task)}/>
  <p>{task.text}</p>
  <button style={cn} onClick={() => deleteTask(task.id)}>X</button>
  </div>
  ))}
 <input value={text} onChange={e => setText(e.target.value)} />
 <button onClick={() => addTask(text)}>Add</button>
  </div>
  );
 }
 export default TodoList;
 