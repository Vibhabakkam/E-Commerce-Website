import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
