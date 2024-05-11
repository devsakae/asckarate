import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import User from './components/User';
import { FirebaseProvider } from './store/FirebaseProvider';
function App() {

  return (
  <BrowserRouter>
      <Routes>
          <Route 
            path="/login" 
            element={
            <FirebaseProvider>
            <User />
            </FirebaseProvider>
            } />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
