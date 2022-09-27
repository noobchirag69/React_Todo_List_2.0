import React from 'react'
import '../styles/todo.css'

export const Todo = ({task, onDelete}) => {
  return (
    <>
      <div className="wrapper">
        <h3>{task.task}</h3>
        <button onClick={() => { onDelete(task) }}>Delete</button>
      </div>
    </>
  )
}
