import './App.css';
import Login from './components/Login';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './components/Signup';
import Authorized from './components/Authorized';
import Resume from './components/Resume_template/Resume';
import Resume2 from './components/Resume_template/Resume2';
import Resume3 from './components/Resume_template/Resume3';
import Profile from './components/Profile';


function App() {
  const getUserdata=async()=>{
    const res = await fetch('http://localhost:/user/getuser', {
        method: 'POST',
        headers: { 'auth-token': localStorage.getItem('token') },
    })
  const  data =await res.json()
    return data
}
  const [edit, setedit] = useState({name:'Name',email:'Email',work:'Your work',phone:'number',Address:'address',website:'your website',summary:'summary of your career',education:'Education',skills:'skills'})
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/auth' element={<Authorized  edit={edit} setedit={setedit} />} />
          <Route path='/auth/resume' element={<Resume  edit={edit} setedit={setedit}/>}/>
          <Route path='/auth/resume2' element={<Resume2  edit={edit} setedit={setedit}/>}/>
          <Route path='/auth/resume3' element={<Resume3  edit={edit} setedit={setedit}/>}/>
          <Route path='/user/profile' element={<Profile userdata={getUserdata} edit={edit} setedit={setedit}/>}/>

        </Routes>

      </BrowserRouter>




    </>
  );
}

export default App;
