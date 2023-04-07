import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
function App() {
  return (
    <>
    <BrowserRouter>
    <div className="container d-flex align-items-center">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
      </div>
    </BrowserRouter>
 
   
    
    
    </>
  );
}

export default App;
