import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
// import Menu from "./components/Menu";
// import Title from "./components/Title";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./style/GlobalStyle";
import ThemeToggleContainer from "./components/ThemeToggle/ThemeToggleContainer";

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider>
            <GlobalStyle />
            {/* <Title />
        <Menu /> */}
            <Header />
            <ThemeToggleContainer />
            <MainContainer>
              <Router />
            </MainContainer>
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
