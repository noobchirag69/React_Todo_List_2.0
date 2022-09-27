import React from 'react'
import { Todo } from "./Todo"; 
import '../styles/todoList.css'

export const TodoList = (props) => {
  return (
    <div className="container">
      <h1>Tasks</h1>
      {props.todos.length === 0 ? "No tasks to display." :
        props.todos.map((todo) => {
          console.log(todo.sno);
          return (<Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        })
      }
    </div>
  )
}
