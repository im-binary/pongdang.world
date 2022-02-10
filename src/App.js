import "./App.css";
import "./style/link.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Router from "./components/Router";
import Title from "./components/Title";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Title />
        <Menu />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
