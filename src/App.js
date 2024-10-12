// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import AllProduct from './components/AllProduct';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/allProduct" element={<AllProduct/>} />
      <Route path="/update/:productId" element={<UpdateProduct/>} />




      
    </Routes>
    <Footer/>
  </Router>
);

export default App;
