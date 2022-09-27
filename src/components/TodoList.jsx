import React from 'react'
import { Todo } from "./Todo"; 
import '../styles/todoList.css'

export const TodoList = (props) => {
  return (
    <div className="container">
      <h1>Tasks</h1>
      {props.tasks.length === 0 ? "No tasks to display." :
        props.tasks.map((task) => {
          console.log(task.sno);
          return (<Todo task={task} key={task.sno} onDelete={props.onDelete} />
          )
        })
      }
    </div>
  )
}
