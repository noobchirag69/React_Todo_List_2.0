import React from 'react'
import '../styles/todo.css'

export const Todo = ({todo, onDelete}) => {
  return (
    <>
      <div className="wrapper">
        <h3>{todo.task}</h3>
        <button onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
    </>
  )
}
