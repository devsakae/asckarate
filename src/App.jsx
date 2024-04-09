import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import TestDemo from './components/DemoCalendar';
import Calendario from './components/Calendario';

function App() {

  return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<TestDemo />} />
          <Route path="/calendario" element={<Calendario /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
