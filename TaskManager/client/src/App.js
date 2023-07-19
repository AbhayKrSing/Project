import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './components/Login'
import SignUp from './components/Signup'
import Main from './main_page/Main';
import * as actionCreator from './state/actionCreator'
import { useDispatch } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  const dispatch = useDispatch()
  dispatch(actionCreator.authorize())
  return (
    <div className="App p-5">
      <Main />
      <Routes>
        <Route path='/' element={< ProtectedRoute> <Home actionCreator={actionCreator} />  </ProtectedRoute>} /> {/*protected Route */}
        <Route path='/login' element={<Login actionCreator={actionCreator} />} />
        <Route path='/signup' element={<SignUp actionCreator={actionCreator} />} />
      </Routes>
    </div>

  );
}

export default App;
