import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
function App() {
  const [condition, setcondition] = useState(true)
  return (
    <>
        <div className='container border'>
            <Navbar  condition={condition} setcondition={setcondition}/>
        </div>

    </>

  );
}

export default App;
