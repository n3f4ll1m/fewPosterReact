import "./Header.scss";
import { NavLink, withRouter } from "react-router-dom";
function Header(props) {
  let logoutHandler = () => {
    console.log("logouted");
    props.setIsLogined = false;
  };
  return props.isLogined ? (
    <header>
      Header
      <NavLink onClick={logoutHandler} to="/login">
        Logout
      </NavLink>
    </header>
  ) : (
    <div />
  );
}

export default withRouter(Header);
