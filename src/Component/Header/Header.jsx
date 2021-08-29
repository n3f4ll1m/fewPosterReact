import "./Header.scss";
import { NavLink, withRouter } from "react-router-dom";
function Header(props) {
  let logoutHandler = () => {
    console.log("logouted");
    props.setIsLogined(false);
  };

  return props.isLogined ? (
    <header>
      <div className="Logo">
        <NavLink to="/profile">LOGO</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink onClick={logoutHandler} to="/login" className="Logout">
        Logout
      </NavLink>
    </header>
  ) : (
    <div />
  );
}

export default withRouter(Header);
