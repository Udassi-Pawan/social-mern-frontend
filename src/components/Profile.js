import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import "./Profile.css";
import { backend_url } from "../helper";

const Profile = ({ creator, location, image }) => {
  const [user, setUser] = useContext(Context);

  const clickHandler = async () => {
    const result = await fetch(backend_url + "/befriend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id1: user._id,
        id2: creator._id,
      }),
    });
    setUser(await result.json());
  };

  return (
    <div className="top">
      <Link to={`/user/${creator._id}`}>
        <div className="profile">
          <img id="fotu" src={image}></img>
          <div className="cred">
            <p className="author">{creator?.name}</p>
            <p className="loc">{location}</p>
          </div>
        </div>
      </Link>
      {!user.friends.find((fr) => fr._id == creator._id) && (
        <svg
          onClick={clickHandler}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
        </svg>
      )}
      {user.friends.find((fr) => fr._id == creator._id) && (
        <svg
          className="blue"
          onClick={clickHandler}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg>
      )}
    </div>
  );
};

export default Profile;
