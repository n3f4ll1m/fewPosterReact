import "./Main.scss";
import Post from "./Post/Post";
import Login from "./Login/Login";
import RegForm from "./RegForm/RegForm";
import About from "./About/About";
import { Redirect, Switch, Route } from "react-router-dom";
function Main(props) {
  let data = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => json);
  console.log(data);
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

          <Route path="/contacts">
            <div>Contacts</div>
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/posts">
            <div className="Posts">
              {/* {
                
                .then(json => {
                  data = json;
                  const post = data.map((item) => (<Post title ={item.title} text = {item.body}/>)
                )}
              } */}
            </div>
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
