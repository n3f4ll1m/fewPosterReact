import "./Main.scss";
import PostDetails from "./Posts/PostDetails/PostDetails";
import Posts from "./Posts/Posts";
import Login from "./Login/Login";
import RegForm from "./RegForm/RegForm";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import { Route, Switch } from "react-router-dom";
import Profile from "./Profile/Profile";
function Main(props) {
  return (
    <section className="Main">
      <div className="Container">
        <Switch>
          <Route path="/" exact>
            <Profile isLogined={props.isLogined} />
          </Route>
          <Route path="/login">
            <Login
              state={props.state}
              setState={props.setState}
              isLogined={props.isLogined}
              setIsLogined={props.setIsLogined}
            />
          </Route>
          <Route path="/sign-up">
            <RegForm />
          </Route>
          <Route path="/contacts">
            <Contacts isLogined={props.isLogined} />
          </Route>
          <Route path="/about">
            <About isLogined={props.isLogined} />
          </Route>
          <Route path="/posts/:index" exact component={PostDetails} />
          <Route path="/posts">
            <Posts isLogined={props.isLogined} />
          </Route>

          <Route>
            <h2>Error 404</h2>
            <div className="postDesc">This URL is invalid.</div>
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Main;
