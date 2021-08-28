import "./Login.scss";
import { NavLink, withRouter } from "react-router-dom";

function Login(props) {
  let data = {};
  let checkData = () => {
    if (data.Login === "admin" && data.Password === "admin") {
      console.log("OK");
      props.setIsLogined(true);
      props.history.push("/profile");
    } else {
      console.log("Whats wrong");
    }
  };
  let inputHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    data[name] = value;
    console.log(data);
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
      <button type="button" onClick={checkData}>
        Sign In
      </button>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </form>
  );
}

export default withRouter(Login);
