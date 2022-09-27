import React from 'react'
import '../styles/create.css'

export const Create = () => {
  return (
    <div className="form-box">
        <form>
            <label htmlFor="task">To-Do</label>
            <input type="text" id="task" placeholder="Add Task"/>
            <button>Add Task</button>
        </form>
    </div>
  )
}
