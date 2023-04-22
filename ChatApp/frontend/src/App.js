import './App.css';
import {  Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage'
import Chatpage from './Pages/Chatpage';
function App() {
  return (


      <Routes>
        <Route >
          <Route path="/" element={<Homepage/>} />
          <Route path="/chats" element={<Chatpage/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
