import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import HomepageProfile from "../components/HomepageProfile";
import FriendsList from "../components/FriendsList";
import "./UserPage.css";
import HeaderHomepage from "../components/HeaderHomepage";
import { useContext, useEffect, useState } from "react";
import PostsUser from "../components/PostsUser";
import { backend_url } from "../helper";
import { Context } from "../context";

const UserPage = () => {
  const history = useHistory();
  const [user] = useContext(Context);
  if (!user.email) history.push("/");
  const params = useParams();
  const id = params.id;
  const [localUser, setLocalUser] = useState({
    name: "",
    occupation: "",
    location: "",
    image: "",
    email: "",
    password: "",
    friends: [],
  });

  useEffect(() => {
    const getUser = async () => {
      const result = await fetch(backend_url + "/user/" + id);
      const final = await result.json();
      setLocalUser(...final);
    };
    getUser();
  }, [id]);
  return (
    <div className="user-page">
      <HeaderHomepage></HeaderHomepage>
      <div className="bottom">
        <div className="baki">
          <HomepageProfile user={localUser}></HomepageProfile>
          <FriendsList user={localUser}></FriendsList>
        </div>
        <div>{localUser.name && <PostsUser user={localUser}>`</PostsUser>}</div>
      </div>
    </div>
  );
};

export default UserPage;
