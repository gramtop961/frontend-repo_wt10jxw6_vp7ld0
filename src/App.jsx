import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Reviews from './pages/Reviews'
import Location from './pages/Location'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
