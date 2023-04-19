import './App.css';
import Login from './components/Login';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    const canvas = await html2canvas(document.querySelector("#pdf"));
    console.log(canvas)
    const imgData = canvas.toDataURL("image/png");
    var imgWidth = 210;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;

    var doc = new jsPDF('p', 'mm','',true);
    var position = 0;

    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      // doc.setFillColor(200, 0, 0);
      // doc.rect(10, 10, 100, 100, 'F');
      doc.addPage();
      doc.setFillColor(0, 200, 0);
      doc.rect(10, 10, 100, 100, 'F');
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    doc.save('file.pdf');
  };
  const getUserdata = async () => {
    const res = await fetch('http://localhost:/user/getuser', {
      method: 'POST',
      headers: { 'auth-token': localStorage.getItem('token') },
    })
    const data = await res.json()
    return data
  }
  const [edit, setedit] = useState({ name: 'Name', email: 'Email', work: 'Your work', phone: 'number', Address: 'address', website: 'your website', summary: 'summary of your career', education: 'Education', skills: 'skills' })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/auth' element={<Authorized edit={edit} setedit={setedit} createPDF={createPDF} />} />
          <Route path='/auth/resume' element={<Resume edit={edit} setedit={setedit} createPDF={createPDF} />} />
          <Route path='/auth/resume2' element={<Resume2 edit={edit} setedit={setedit} createPDF={createPDF} />} />
          <Route path='/auth/resume3' element={<Resume3 edit={edit} setedit={setedit} createPDF={createPDF} />} />
          <Route path='/user/profile' element={<Profile userdata={getUserdata} edit={edit} setedit={setedit} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

      </BrowserRouter>




    </>
  );
}

export default App;
