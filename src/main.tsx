import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage/Homepage.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Shop from "./components/Shop/Shop.tsx";
import Blog from "./components/Blog/Blog.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
    <Shop />
    <Blog />
    <Footer />
  </React.StrictMode>,
);
