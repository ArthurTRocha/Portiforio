import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "/src/pages/Home.jsx"
import Sucesso from "../src/pages/Sucesso";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/sucesso" element={<Sucesso/>} />

      </Routes>
    </Router>
  );
}

export default App;
