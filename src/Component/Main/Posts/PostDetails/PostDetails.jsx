import "./PostDetails.scss";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
function PostDetails(props) {
  let [data, setData] = useState({});
  useEffect(() => {
    let index = +props.match.params.index + 1;
    console.log("index");
    fetch("https://jsonplaceholder.typicode.com/posts/" + index)
      .then((response) => {
        //console.log("resp", response);
        return response.json();
      })
      .then((json) => {
        setData(json);
        //console.log("json", json);
      });
  });
  console.log(data);

  return (
    <div className="PostDetails">
      <h2>{data.title}</h2>
      <div className="postDesc">{data.body}</div>
      <div className="postDesc">{data.body}</div>
      <div className="postDesc">{data.body}</div>
    </div>
  );
}
export default withRouter(PostDetails);
