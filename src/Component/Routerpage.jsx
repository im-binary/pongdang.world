import React from "react";
import Home from "./Home";
import Info from "./Info";
import Topics from "./Topics";

export default function Routerpage() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <Home />
      <Topics />
      <Info />
    </div>
  );
}
