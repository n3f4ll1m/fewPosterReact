import "./Login.scss";
import { NavLink, withRouter } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  let data = {};
  let [errorText, setErrorText] = useState("");
  let checkData = () => {
    setErrorText("");
    //console.log(data);
    if (data.Login === "admin" && data.Password === "admin") {
      console.log("OK");
      //setErrorText("");
      props.setIsLogined(true);
      props.history.push("/");
    } else {
      console.log("Whats wrong");
      console.log(data);
      setErrorText("Wrong Login or Password");
    }
  };
  let inputHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    data[name] = value;
  };
  return (
    <form className="Login Form">
      <span>LOGIN</span>
      <input
        name="Login"
        onChange={inputHandler}
        type="text"
        placeholder="Login"
      />
      <input
        name="Password"
        onChange={inputHandler}
        type="password"
        placeholder="Password"
      />
      <div className="ErrorText">{errorText}</div>
      <button type="button" onClick={checkData}>
        Sign In
      </button>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </form>
  );
}

export default withRouter(Login);
