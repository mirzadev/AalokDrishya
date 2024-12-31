import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./Component/NavbarItems/Navbar";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Commercial from "./routes/Commercial";
import Wedding from "./routes/Wedding";
import "leaflet/dist/leaflet.css";
import RealEstate from "./routes/RealEstate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/weddings" element={<Wedding />} />
        <Route path="/realestate" element={<RealEstate />} />
      </Routes>
    </div>
  );
}

export default App;
