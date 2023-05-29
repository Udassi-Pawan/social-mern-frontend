import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import "./PostsHomepage.css";
import SinglePost from "./SinglePost";
import { backend_url } from "../helper";

const PostsHomepage = (props) => {
  const localuser = props.user;
  const [, , posts, setPosts] = useContext(Context);
  useEffect(() => {
    let result;
    const getPosts = async () => {
      result = await fetch(backend_url + "/homepage");
      setPosts(await result.json());
    };
    getPosts();
  }, [localuser]);

  return posts.map((post) => (
    <SinglePost key={post._id} post={post}></SinglePost>
  ));
};

export default PostsHomepage;
