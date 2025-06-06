import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Movie from './Movie';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/movie' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
