import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
// import Menu from "./components/Menu";
// import Title from "./components/Title";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <BrowserRouter>
          {/* <Title />
        <Menu /> */}
          <Header />
          <MainContainer>
            <Router />
          </MainContainer>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
