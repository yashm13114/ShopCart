import React, { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { Products } from './components/Products'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { SingleProduct } from './components/SingleProduct'
import { Error } from './components/Error'
import { Cart } from './components/Cart'
import { Home } from './components/Home'
function App() {

  return (
    <>

      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
