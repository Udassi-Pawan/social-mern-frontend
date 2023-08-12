import "./RegisterModal.css";
import Card from "./Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../context";
import { backend_url } from "../helper";
const LoginModal = () => {
  const [, setUser, , , token, setToken, , , loading, setLoading] =
    useContext(Context);

  const email = useRef();
  const password = useRef();
  const history = useHistory();
  const clickHandler = async (e) => {
    e.preventDefault();
    let result;
    setLoading(true);

    try {
      result = await fetch(backend_url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });
      result = await result.json();
    } catch (err) {
      return alert("Login Failed!");
    }
    setLoading();
    if (!result || result.length != 2) return alert("Login Failed!");

    setUser(result[0]);
    setToken(result[1]);
    history.push("/home");
  };

  return (
    <Card className="register-modal">
      <p>Welcome to Sociopedia, the Social Media for Sociopaths! </p>
      <div>
        <input ref={email} className="email" placeholder="Email"></input>
        <input
          ref={password}
          type="password"
          className="password"
          placeholder="Password"
        ></input>
        <button onClick={clickHandler}>Login</button>
        <Link to="/register" className="link">
          Don't have an account? Sign up here.
        </Link>
        <p>Guest username and password: a@b.com 123456 </p>
      </div>
    </Card>
  );
};

export default LoginModal;
