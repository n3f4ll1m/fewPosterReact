import "./Post.scss";
function Post(props) {
  return (
    <div className="Post">
      <h2>props.title</h2>
      <div className="postDesc">props.text</div>
    </div>
  );
}

export default Post;
