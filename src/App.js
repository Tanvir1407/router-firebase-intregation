import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Order from './components/Order/Order';
import Register from './components/Register/Register';


function App() {
  
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
