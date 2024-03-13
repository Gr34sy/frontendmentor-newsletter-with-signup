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
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="App">
      <AppWrapper>
        {!showAlert && <Card action={() => setShowAlert(true)}/>}
        {showAlert && <Alert action={() => setShowAlert(false)}/>}
      </AppWrapper>

      <footer className="app__footer">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://heroic-quokka-3e69bf.netlify.app" target="_blank" rel="noreferrer">
          Greasy
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
