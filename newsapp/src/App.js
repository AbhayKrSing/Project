import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import News  from './Components/News' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
 const App =()=> {
let apikeys =process.env.REACT_APP_API_KEYS1
 const [progress, setprogress] = useState(0)
  const setProgress=(value)=>{
    setprogress(value)
   }

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            color='red'
            progress={progress} 
          />
          <Routes>
            <Route path="/" element={<News progress={setProgress} apikeys={apikeys}  pagesize={10} country="in" category='general' key='general'/>} />
            <Route path="/entertainment" element={<News progress={setProgress} apikeys={apikeys}  pagesize={10} country="in" category='entertainment' key='entertainment' />} />
            <Route path="/business" element={<News progress={setProgress} apikeys={apikeys}  pagesize={10} country="in" category='business' key='business' />} />
            <Route path="/health" element={<News progress={setProgress} apikeys={apikeys}  pagesize={10} country="in" category='health' key='health' />} />
            <Route path="/science" element={<News progress={setProgress} apikeys={apikeys}  pagesize={10} country="in" category='science' key='science' />} />
            <Route path="/sports" element={<News progress={setProgress} apikeys={apikeys}  pagesize={10} country="in" category='sports' key='sports' />} />
            <Route path="/technology" element={<News progress={setProgress} apikeys={apikeys}  pagesize={10} country="in" category='technology' key='technology' />} />
          </Routes>


        </div>
      </BrowserRouter>
    )

}

export default App