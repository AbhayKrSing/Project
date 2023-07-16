import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './components/Login'
import SignUp from './components/Signup'
import Main from './main_page/Main';
// import { useSelector } from 'react-redux'
// import { useEffect } from 'react';
function App() {
  // const state = useSelector((state) =>{ state.User})


  return (
    <div className="App p-5">
      <Main />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} /> {/*protected Route */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
