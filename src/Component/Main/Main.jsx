import "./Main.scss";
import Post from "./Post/Post";
import Login from "./Login/Login";
import RegForm from "./RegForm/RegForm";
import { Redirect, Switch, Route } from "react-router-dom";
function Main(props) {
  return (
    <section className="Main">
      <div className="Container">
        <Switch>
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

          <Route path="/profile">
            <div>home</div>
          </Route>

          <Route path="/posts">
            <Post />
            <Post />
            <Post />
          </Route>

          {!props.isLogined ? (
            <Redirect from="/" to="/login" />
          ) : (
            <Redirect from="/" to="/profile" />
          )}
        </Switch>
      </div>
    </section>
  );
}

export default Main;
