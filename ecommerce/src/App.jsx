import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
      <Route excat path='/home' element={<Home/>} />
      <Route excat path='/register' element={<Register/>} />
      <Route excat path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
