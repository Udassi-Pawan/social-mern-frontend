import React, { useState } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    occupation: "",
    location: "",
    image: "",
    email: "",
    password: "",
    friends: [],
  });

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [mode, setMode] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <Context.Provider
      value={[
        user,
        setUser,
        posts,
        setPosts,
        token,
        setToken,
        mode,
        setMode,
        loading,
        setLoading,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export { Context };
export default ContextProvider;
