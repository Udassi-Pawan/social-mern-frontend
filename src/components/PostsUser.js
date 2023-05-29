import { useEffect, useState } from "react";
import "./PostsHomepage.css";
import SinglePost from "./SinglePost";
import { backend_url } from "../helper";

const PostsUser = (props) => {
  const localuser = props.user;
  const [Posts, setPosts] = useState([]);
  console.log(localuser);
  useEffect(() => {
    let result;
    const getPosts = async () => {
      result = await fetch(backend_url + `/posts/${localuser._id}`);
      setPosts(await result.json());
    };
    if (localuser) getPosts();
  }, [localuser]);

  return Posts.map((post) => (
    <SinglePost key={post._id} post={post}></SinglePost>
  ));
};

export default PostsUser;
