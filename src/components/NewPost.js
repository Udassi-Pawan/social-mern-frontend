import { useContext, useRef, useState } from "react";
import { Context } from "../context";
import Card from "./Card";
import "./NewPost.css";
import { backend_url } from "../helper";

const NewPost = ({ user }) => {
  const [image, setImage] = useState("");
  const [, , , , , , , , , setLoading] = useContext(Context);

  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
  };

  const imageLink = useRef();
  const [, , , setPosts, token] = useContext(Context);

  const clickHandler = async (e) => {
    setLoading(true);
    const data = new FormData();
    data.set("caption", imageLink.current.value);
    data.set("creator", user._id);
    data.set("base64", image);
    const result = await fetch(backend_url + "/newpost", {
      method: "POST",
      headers: {
        "token": token,
      },
      body: data,
    });

    console.log(await result.json());

    const getPosts = async () => {
      const result = await fetch(backend_url + "/homepage");
      setPosts(await result.json());
    };
    getPosts();
    setLoading();
  };

  return (
    <Card className="Newpost">
      <div>
        <input type="file" id="actual-btn" hidden onChange={convertToBase64} />

        <img src={user.image}></img>

        <input ref={imageLink} placeholder="What's on your mind?"></input>
      </div>
      <div className="line"></div>
      <section className="post-options">
        <div>
          <label htmlFor="actual-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
            </svg>
            <p className="grey">Image</p>
          </label>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
          </svg>
          <p className="grey">Clip</p>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M360.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
          </svg>
          <p className="grey">Attachment</p>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M176 0C123 0 80 43 80 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM48 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H200V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
          </svg>
          <p className="grey">Audio</p>
        </div>
        <button onClick={clickHandler}>Post</button>
      </section>
    </Card>
  );
};

export default NewPost;
