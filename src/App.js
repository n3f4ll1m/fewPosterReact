import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [state, setState] = useState("login");
  const [isLogined, setIsLogined] = useState(true);
  const [respData, setRespData] = useState([
    { title: "name1", text: "text1 text1text1text1text1text1text1text1text1" },
    { title: "name2", text: "text2text1 text1text1text1text1text1text1" }
  ]);
  return (
    <div className={"App"}>
      <Router>
        <Header
          state={state}
          isLogined={isLogined}
          setIsLogined={setIsLogined}
          setRespData={setRespData}
        />
        <Main
          state={state}
          setState={setState}
          isLogined={isLogined}
          setIsLogined={setIsLogined}
          respData={respData}
        />
      </Router>
    </div>
  );
}

export default App;
