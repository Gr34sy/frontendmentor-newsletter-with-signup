// styles
import "./styles/App.css";
import "./styles/reset.css";

//components
import { AppWrapper } from "./components/AppWrapper";
import { Card } from "./components/Card";
import { Alert } from "./components/Alert";

//hooks
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <AppWrapper>

      </AppWrapper>

      <footer class="app__footer">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://heroic-quokka-3e69bf.netlify.app" target="_blank">
          Greasy
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
