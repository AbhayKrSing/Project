import './App.css';
import Login from './components/Login';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Authorized from './components/Authorized';
import Template from './components/Template';


function App() {
  const [template, settemplate] = useState('')
  const [length, setlength] = useState(0)
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth" element={<Authorized settemplate={settemplate} template={template} />} />
          <Route path="/template" element={<Template settemplate={settemplate} template={template} setlength={setlength} length={length} />} /> 
        </Routes>

      </BrowserRouter>




    </>
  );
}

export default App;
