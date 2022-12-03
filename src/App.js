import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router";
import { BrowserRouter, useLocation } from "react-router-dom";

const HatsPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>HATSPAGE</h1>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
