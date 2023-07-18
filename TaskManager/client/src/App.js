import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './components/Login'
import SignUp from './components/Signup'
import Main from './main_page/Main';
import * as actionCreator from './state/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch()
  dispatch(actionCreator.authorize())
  const User = useSelector((state) => state.User)
  const navigate = useNavigate()
  useEffect(() => {
    if (User) {
      navigate('/')
    }
    else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [User])
  return (
    <div className="App p-5">
      <Main />
      <Routes>
        <Route path='/' element={<Home actionCreator={actionCreator} />} /> {/*protected Route */}
        <Route path='/login' element={<Login actionCreator={actionCreator} />} />
        <Route path='/signup' element={<SignUp actionCreator={actionCreator} />} />
      </Routes>
    </div>

  );
}

export default App;
