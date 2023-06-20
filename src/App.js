import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ArView from "./page/ArView";
import Menu from "./page/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/ar" element={<ArView/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/menu" element={<Menu/>} /> {/* 👈 Renders at /app/ */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
