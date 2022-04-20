import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Post from '../Post/Post'


const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log("posts", posts);

  

  return (
    <Container>
      <div className="posts_wrap">
      {
        posts.map(item=><Post key={item._id} item={item} />)
      }
      </div>
    </Container>
  );
};

export default Posts;
