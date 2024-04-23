<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
=======
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import TestDemo from './components/DemoCalendar';
import Calendario from './components/Calendario';
>>>>>>> b270ec9b1f5c59cfcfb655701b43c2a5c9fa3bab

function App() {

  return (
<<<<<<< HEAD
    <>
      <Hero />
      <h2>Associação Sul Catarinense de Karatê</h2>
    </>
=======
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<TestDemo />} />
          <Route path="/calendario" element={<Calendario /> } />
      </Routes>
    </BrowserRouter>
>>>>>>> b270ec9b1f5c59cfcfb655701b43c2a5c9fa3bab
  )
}

export default App
