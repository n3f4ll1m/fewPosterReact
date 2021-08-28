import "./RegForm.scss";
import { Link } from "react-router-dom";
function RegForm(props) {
  let data = {};
  let checkData = () => {
    console.log("OK");
    console.log(data);
  };
  let inputHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    data[name] = value;
  };
  return (
    <div className="Reg Form">
      <span>REGISTRATION</span>
      <input
        type="text"
        placeholder="Name Surname"
        onChange={inputHandler}
        name="Name"
      />
      <input
        type="text"
        placeholder="Login"
        onChange={inputHandler}
        name="Login"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={inputHandler}
        name="Password"
      />
      <button type="submit" onClick={checkData}>
        Sign Up
      </button>
      <Link to="/login">I Have Account</Link>
    </div>
  );
}

export default RegForm;
