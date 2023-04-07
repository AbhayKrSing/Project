import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Authorized from './components/Authorized';
function App() {
  return (
    <>
    <BrowserRouter>
   
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/auth" element={<Authorized/>} />
      </Routes>
    
    </BrowserRouter>
 
   
    
    
    </>
  );
}

export default App;
