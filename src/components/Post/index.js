import React from "react";
import {format} from "date-fns";
import "./style.css";


function Post(props) {
  return (
    <section className="post-info">
      <header>
        <p className="post-info-date">
          {format(new Date(props.post.created_at), "dd/MM/yyyy HH:mm")}
        </p>
        <h3 className="post-info-title">{props.post.title}</h3>
        <p className="post-info-content">{props.post.body}</p>
      </header>
    </section>
  );
}

export default Post;
