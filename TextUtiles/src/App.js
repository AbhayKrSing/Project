
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';


function App() {
  const [Mode, SetMode] = useState('light');
  const [alert, setalert] = useState(null)
  let ShowAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000)
  }
  let backgroundColorer = {
    backgroundColor: Mode === 'primary' ? '#294a96ad' : Mode === 'warning' ? '#868622' : Mode === 'success' ? '#325a32' : Mode === 'info' ? '#157da8' : Mode==='light'?'#dee2e6':'dark',
  }
  let toggleMode = (cls) => {
    if (Mode === 'light') {
      SetMode(cls)
      document.body.classList.add(`bg-${cls}`)
      ShowAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} Mode is Successfully enabled`, 'success')
    }
    else if (Mode === cls) {
      SetMode('light')
      // document.body.style.backgroundColor = 'white'
      document.body.removeAttribute('class')
      ShowAlert('Light Mode is Successfully enabled', 'success')
    }
    else {
      SetMode(cls)
      document.body.removeAttribute('class', '')
      document.body.classList.add(`bg-${cls}`)
      ShowAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} Mode is Successfully enabled`, 'success')
    }

  }

  return (
    <>
      <Router>
        <Navbar titles="TextUtilies" mode={Mode} toggleMode={toggleMode} About='About' backgroundColorer={backgroundColorer} />
        <Alert alert={alert} />
        {/* <TextForm heading="Enter the text" ShowAlert={ShowAlert} mode={Mode} /> */}
        {/* color={Color} enable it when state variable color become active}
      <ColorMode ThemeChanger={ThemeChanger} /> */}
        {/* <About /> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes >
          <Route path="about" element={<About mode={Mode} />} />
          <Route path="/" element={<TextForm heading="Word counter,Character counter,Remove extra spacer,Uppercase & Lowercase converter" ShowAlert={ShowAlert} mode={Mode} backgroundColorer={backgroundColorer}/>} />
        </Routes>
      </Router>
    </>
  );  //semi colon(;) niche isliye lga hi kyuki react automatically ise agar kahi aur assign kar dega to dikkat aajayegi
}
export default App;
