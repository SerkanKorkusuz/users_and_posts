import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { BsChevronLeft } from 'react-icons/bs';
import qs from "qs";
import { addToLastViewedAction, getPostsAction } from "../../store/actions";
import Post from "../../components/Post";
import "./style.css";


function PostsList({getPosts, addToLastViewed}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {state, search} = useLocation();
  const {userId} = qs.parse(search, {ignoreQueryPrefix: true});
  const user = state?.user;
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };

  useEffect(() => {
    setLoading(true);
    getPosts(userId).then((response) => {
      setLoading(false);
      if (response.error) return alert(response.error.message);
      setPosts(response.payload.data.data);
    });
    console.log("user", user);
    if (user) addToLastViewed(user);
  }, [user, userId]);

  return (
    <div className="row">

      <div className="row-cols-12 offset-1 btn-back">
        <Button variant="outline-primary" className="bgColor" onClick={goBack}> <BsChevronLeft/> Go Back
        </Button>
      </div>
      <div className="container offset-1 center posts">
        {user && <div className="post-owner">{user.name}</div>}
        {!posts[0] && <div><em>No posts available</em></div>}
        <ul className="post-list">
          {posts.map((post) => {
            return (
              <li className="post-box-item" key={post.id}>
                <p className="post-list-item">
                  <Post post={post}/>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: (userId) => dispatch(getPostsAction(userId)),
  addToLastViewed: (user) => dispatch(addToLastViewedAction(user)),
});

export default connect(null, mapDispatchToProps)(PostsList);
