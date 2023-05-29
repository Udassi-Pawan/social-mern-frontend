import "./HomePage.css";
import HeaderHomepage from "../components/HeaderHomepage";
import HomepageProfile from "../components/HomepageProfile";
import NewPost from "../components/NewPost";
import PostsHomepage from "../components/PostsHomepage";
import Ad from "../components/Ad";
import FriendsList from "../components/FriendsList";
import { useContext } from "react";
import { Context } from "../context";

const HomePage = () => {
  const [user] = useContext(Context);
  return (
    <div className="homepage">
      <HeaderHomepage></HeaderHomepage>
      <div className="homepage-divs">
        <div className="left">
          <HomepageProfile user={user}></HomepageProfile>
        </div>

        <div className="middle">
          <NewPost user={user}></NewPost>
          <PostsHomepage></PostsHomepage>
        </div>

        <div className="right">
          <Ad></Ad>
          <FriendsList user={user}></FriendsList>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
