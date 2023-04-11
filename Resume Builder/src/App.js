import './App.css';
import Login from './components/Login';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Authorized from './components/Authorized';
import Template from './components/Template';


function App() {
  const [template, settemplate] = useState('')
  const [edit, setedit] = useState({name:'Name',email:'Email',work:'Your work',phone:'number',Address:'address',website:'your website',summary:'summary of your career',education:'Education',skills:'skills'})
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth" element={<Authorized settemplate={settemplate} template={template} edit={edit} setedit={setedit}/>} />
          <Route path="/template" element={<Template settemplate={settemplate} template={template} edit={edit} setedit={setedit} />} /> 
        </Routes>

      </BrowserRouter>




    </>
  );
}

export default App;
