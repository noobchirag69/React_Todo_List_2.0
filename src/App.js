import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Create } from './components/Create'
import './styles/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
