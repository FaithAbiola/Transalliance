import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inpay from './components/inpay/Inpay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inpay />} />  
      </Routes>
  </Router>
  );
}

export default App;
