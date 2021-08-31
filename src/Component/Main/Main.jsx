import "./Main.scss";
import Post from "./Post/Post";
import Login from "./Login/Login";
import RegForm from "./RegForm/RegForm";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import { Redirect, Switch, Route } from "react-router-dom";
function Main(props) {
  //.then();

  console.log(props.respData);
  return (
    <section className="Main">
      <div className="Container">
        <Switch>
          <Route path="/" exact>
            {!props.isLogined ? (
              <Redirect from="/" to="/login" />
            ) : (
              <Redirect from="/" to="/" />
            )}
            <div>home</div>
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
            {!props.isLogined ? (
              <Redirect from="/contacts" to="/login" />
            ) : (
              <Redirect from="/contacts" to="/contacts" />
            )}
            <Contacts />
          </Route>
          <Route path="/about">
            {!props.isLogined ? (
              <Redirect from="/about" to="/login" />
            ) : (
              <Redirect from="/about" to="/about" />
            )}
            <About />
          </Route>
          <Route path="/posts">
            <div className="Posts">
              {!props.isLogined ? (
                <Redirect from="/posts" to="/login" />
              ) : (
                <Redirect from="/posts" to="/posts" />
              )}

              {props.respData.map((item, iter) => (
                <Post title={item.title} text={item.text} key={iter} />
              ))}
            </div>
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
