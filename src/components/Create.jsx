import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/create.css'

export const Create = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("The task can't be blank!");
    }
    else {
      addTodo(task);
      setTask("");
      navigate('/');
    }
  }
  return (
    <div className="form-box">
      <form onSubmit={Submit}>
        <label htmlFor="task">To-Do</label>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} id="task" placeholder="Add Task" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}
