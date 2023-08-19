import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage/Homepage.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
  </React.StrictMode>,
);
