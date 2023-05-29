import "./SinglePost.css";
import Card from "./Card";
import Profile from "./Profile";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context";
import { backend_url } from "../helper";

const SinglePost = ({ post }) => {
  const commentText = useRef();
  const [curPost, setCurPost] = useState(post);
  const [user] = useContext(Context);
  const [commentBox, setCommentBox] = useState(false);

  const addCommentHandler = async () => {
    const result = await fetch(`${backend_url}/post/${post._id}/comment`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: commentText.current.value,
      }),
    });
    setCurPost(await result.json());
    commentText.current.value = "";
  };

  const clickHandler = async () => {
    const result = await fetch(`${backend_url}/post/${post._id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user._id,
      }),
    });
    setCurPost(await result.json());
  };

  const commentClickHandler = () => {
    setCommentBox((prev) => !prev);
  };

  return (
    <Card className="SinglePost">
      <Profile
        creator={curPost.creator}
        location={curPost.location}
        image={curPost.creator.image}
      ></Profile>

      <p className="caption">{curPost.caption}</p>
      <img className="post" src={curPost.image}></img>
      <div className="reactions">
        <div className="like">
          {!curPost.likes?.includes(user._id.toString()) && (
            <svg
              onClick={clickHandler}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
            </svg>
          )}
          {curPost.likes?.includes(user._id.toString()) && (
            <svg
              onClick={clickHandler}
              className="love"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          )}
          <p>{curPost.likes.length}</p>
        </div>
        <div className="comment">
          <svg
            onClick={commentClickHandler}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
          </svg>
          <p>{curPost.comments.length}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
        </svg>
      </div>
      {commentBox && (
        <div className="comment-box">
          {curPost.comments.map((com) => {
            return (
              <div key={com}>
                <p className="comment">{com}</p>
                <div className="line"></div>
              </div>
            );
          })}
          <div className="add-comment">
            <input ref={commentText} placeholder="What do you think?"></input>
            <button onClick={addCommentHandler} className="btn-comment">
              Comment
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SinglePost;
