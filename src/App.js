import React from "react";
import "./style.css";
import "./App.scss";
import Home from "./components/Home.js"
import MainNav from "./components/MainNav";


export default function App() {
  return (
    <div>
      <MainNav />
      <Home />
    </div>
  );
}
