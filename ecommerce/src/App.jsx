import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
      <Route excat path='/' element={<Home/>} />
      <Route excat path='/register' element={<Register/>} />
      <Route excat path='/login' element={<Login/>} />
      <Route excat path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
