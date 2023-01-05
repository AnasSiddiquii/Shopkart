import './App.css';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      
        <Route element={<PrivateComponent />}>
          <Route path='/main' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/card' element={<Card />} />
          <Route path="/logout" element={<h1> Logout Component</h1>} />
        </Route>
      
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
