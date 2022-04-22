import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";


import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar";

const App = () => {
  const [page, setPage] = useState("/")

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/ProductList' element={<ProductList/>} />
        <Route path='/Product' element={<Product />} />
      </Routes>
    </div>
  )
};

export default App;