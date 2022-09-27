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
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (task) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      task: task,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList todos={todos} onDelete={onDelete} />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create addTodo={addTodo} />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
