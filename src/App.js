import "./App.css";
import "./style/link.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Router from "./pages/Router";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
