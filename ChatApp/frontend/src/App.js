import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage'
import Chatpage from './Pages/Chatpage';
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Routes>
          <Route >
            <Route path="/" element={<Homepage />} />
            <Route path="/chats" element={<Chatpage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
