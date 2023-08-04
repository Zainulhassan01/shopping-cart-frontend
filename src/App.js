import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ShowProduct from "./components/Product/ShowProduct";
import ShowUserProducts from "./components/User/ShowUserProducts";
import SignupForm from "./components/User/SignUp";
import CreateProduct from "./components/Product/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/product/:id" element={<ShowProduct />} />
          <Route path="/user/:id/products" element={<ShowUserProducts />} />
          <Route path="/createProuct" element= {<CreateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
