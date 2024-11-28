import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./Component/NavbarItems/Navbar";
import About from "./routes/About";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
