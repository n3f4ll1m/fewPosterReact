import "./About.scss";
import { Redirect } from "react-router-dom";
function About(props) {
  return (
    <div className="About">
      {!props.isLogined ? (
        <Redirect from="/about" to="/login" />
      ) : (
        <Redirect from="/about" to="/about" />
      )}
      <h2>About</h2>
      <div className="postDesc">
        This project created by React js for education.
      </div>
    </div>
  );
}

export default About;
