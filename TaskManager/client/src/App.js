import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Main from './main_page/Main';
function App() {
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
