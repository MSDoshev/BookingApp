import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import video from "./assets/video.mp4";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";
import { TheIsland } from "./components/TheIsland/TheIsland";
import { Villas } from "./components/Villas/Villas";
import { VillaDetails } from "./components/Villas/VillaDetails/VillaDetails";

import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);

  return (
    <div className={`body ${isHomePage ? "home-background" : "background"}`}>
      <header>
        <Header />
      </header>
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/theIsland" element={<TheIsland />} />
            <Route path="/villas" element={<Villas />} />
            <Route path="/villa/:id" element={<VillaDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      {isHomePage && (
        <div className="video-background">
          <video src={video} autoPlay loop muted></video>
        </div>
      )}
    </div>
  );
}

export default App;
