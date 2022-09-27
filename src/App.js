import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Create } from './components/Create'
import './styles/style.css'

const App = () => {

  let initTodo;
  if (localStorage.getItem("tasks") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("tasks"));
  }


  const onDelete = (task) => {
    setTasks(tasks.filter((e) => {
      return e !== task;
    }));
    console.log("deleted", tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  const addTask = (task) => {
    let sno;
    if (tasks.length === 0) {
      sno = 0;
    }
    else {
      sno = tasks[tasks.length - 1].sno + 1;
    }
    const myTask = {
      sno: sno,
      task: task,
    }
    setTasks([...tasks, myTask]);
  }

  const [tasks, setTasks] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList tasks={tasks} onDelete={onDelete} />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create addTask={addTask} />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
