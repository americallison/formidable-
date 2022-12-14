import React from "react";
import "./style.css";
// import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home.js"
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      <MainNav />
      <Home />
      <Footer />
    </div>
  );
}
