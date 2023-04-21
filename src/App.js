import React from "react";
import Sidebar from "./pages/Sidebar";
import "./index.css";
import CardComponents from "./pages/CardComponents";
import { Routes, Route } from "react-router-dom";
import VideoPlayer from "./pages/VideoPlayer"
import VideoContainer from "./pages/VideoContainer";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
function App() {
  return (
    <div>
      <Sidebar />
      
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/cards" element={<CardComponents/>} />
        <Route path="/player" element={<VideoContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
