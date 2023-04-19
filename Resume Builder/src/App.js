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
import Page404 from './components/Page404';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
function App() {
    const createPDF = async () => {
      const pdf = new jsPDF("portrait", "pt", "a4"); 
      const data = await html2canvas(document.querySelector("#pdf"));
      console.log(data)
      const img = data.toDataURL("image/png");  
      const imgProperties = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      console.log(imgProperties.height,imgProperties.width,pdfWidth,pdfHeight)
      pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
      // pdf.addPage()
      // pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    }; 
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
          <Route path='/auth' element={<Authorized  edit={edit} setedit={setedit} createPDF={createPDF}/>} />
          <Route path='/auth/resume' element={<Resume  edit={edit} setedit={setedit} createPDF={createPDF} />}/>
          <Route path='/auth/resume2' element={<Resume2  edit={edit} setedit={setedit} createPDF={createPDF} />}/>
          <Route path='/auth/resume3' element={<Resume3  edit={edit} setedit={setedit} createPDF={createPDF} />}/>
          <Route path='/user/profile' element={<Profile userdata={getUserdata} edit={edit} setedit={setedit}/>}/>
          <Route path="*" element={<Page404/>} />
        </Routes>

      </BrowserRouter>




    </>
  );
}

export default App;
