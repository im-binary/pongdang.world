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

import { Provider } from "react-redux";
import { createStore } from "redux";

function App() {
  function reducer(currentState, action) {
    if (currentState === undefined) {
      return {
        listType: localStorage.getItem("listType") || "A",
      };
    }

    const newState = { ...currentState };

    switch (action.type) {
      default:
      case "CHANGE_A": {
        newState.listType = "A";
        break;
      }
      case "CHANGE_B": {
        newState.listType = "B";
        break;
      }
    }

    localStorage.setItem("listType", newState.listType);

    return newState;
  }

  const store = createStore(reducer);

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
              <Provider store={store}>
                <Router />
              </Provider>
            </MainContainer>
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
