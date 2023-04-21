import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sidebar from "./pages/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import VideoPlayer from "./pages/VideoPlayer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
