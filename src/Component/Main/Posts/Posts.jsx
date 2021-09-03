import "./Posts.scss";
import { Redirect } from "react-router-dom";
import Post from "./Post/Post";
import { useEffect, useState } from "react";
function Posts(props) {
  const [respData, setRespData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //console.log("resp", response);
        return response.json();
      })
      .then((json) => {
        setRespData(json);
        //console.log("json", json);
      });
    //console.log("hello");
  });

  return (
    <div className="Posts">
      {!props.isLogined ? (
        <Redirect from="/posts" to="/login" />
      ) : (
        <Redirect from="/posts" to="/posts" />
      )}

      {respData.map((item, index) => {
        return (
          <Post
            title={item.title}
            text={item.body + "   ..."}
            key={item.id}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Posts;
