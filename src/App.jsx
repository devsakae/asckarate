import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import User from './components/Hero';

function App() {

  return (
  <BrowserRouter>
      <Routes>
          <Route path="/login" element={<User />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
