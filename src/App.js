import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [state, setState] = useState("login");
  const [isLogined, setIsLogined] = useState(false);

  return (
    <div className={"App"}>
      <Router>
        {}
        <Header
          state={state}
          isLogined={isLogined}
          setIsLogined={setIsLogined}
        />
        <Main
          state={state}
          setState={setState}
          isLogined={isLogined}
          setIsLogined={setIsLogined}
        />
      </Router>
    </div>
  );
}

export default App;
