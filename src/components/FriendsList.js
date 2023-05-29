import "./FriendsList.css";
import Card from "./Card";
import "./FriendsList.css";
import Profile from "./Profile";
import { useEffect, useState } from "react";

const FriendsList = (props) => {
  const localuser = props.user;
  // const [localUser, setLocalUser] = useState(user);
  // useEffect(() => {
  //   setLocalUser(user);
  // }, [user]);
  // console.log(user);
  return (
    <Card className="FriendsList">
      <p>Friends List</p>
      {localuser?.friends?.map((f) => {
        return (
          <div key={Date.now()}>
            <Profile
              image={f.image}
              location={f.occupation}
              creator={f}
            ></Profile>
            <div className="gap"></div>
          </div>
        );
      })}
    </Card>
  );
};

export default FriendsList;
