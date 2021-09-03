import "./Header.scss";
import { NavLink, withRouter } from "react-router-dom";
function Header(props) {
  let logoutHandler = () => {
    props.setIsLogined(false);
  };

  return props.isLogined ? (
    <header>
      <div className="Logo">
        <NavLink to="/">LOGO</NavLink>
      </div>
      <div className="NavBar">
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
      </div>
      <div className="Logout">
        <NavLink onClick={logoutHandler} to="/login">
          Logout
        </NavLink>
      </div>
    </header>
  ) : (
    <div />
  );
}

export default withRouter(Header);
