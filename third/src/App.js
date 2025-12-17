import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<h1>Page not found</h1>}></Route>
          <Route path="/product/:Id" element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
