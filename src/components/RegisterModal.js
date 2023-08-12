import "./RegisterModal.css";
import Card from "./Card";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import validator from "validator";
import { useContext, useRef, useState } from "react";
import { backend_url } from "../helper";
import { Context } from "../context";

const RegisterModal = () => {
  const [, , , , , , , , loading, setLoading] = useContext(Context);

  const [image, setImage] = useState("");
  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const history = useHistory();

  const firstName = useRef();
  const lastName = useRef();
  const location = useRef();
  const occupation = useRef();
  const email = useRef();
  const password = useRef();

  const clickHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validator.isEmail(email.current.value)) return alert("Invalid Email!");

    if (password.current.value.length < 6)
      return alert("Password length must be greater than 6");

    const data = new FormData();
    data.set("name", firstName.current.value + " " + lastName.current.value);
    data.set("location", location.current.value);
    data.set("occupation", occupation.current.value);
    data.set("image", image);
    data.set("email", email.current.value);
    data.set("password", password.current.value);

    let result;
    try {
      result = await fetch(backend_url + "/register", {
        method: "POST",
        body: data,
      });
    } catch (err) {
      setLoading();
      return alert("Registraion Failed!");
    }
    setLoading();
    if (!result) {
      return alert("Registration Failed!");
    } else alert("Registration Successful!. Login now to continue.");
    history.push("/login");
  };
  return (
    <Card className="register-modal">
      <p>Welcome to Sociopedia, the Social Media for Sociopaths! </p>
      <div>
        <input
          className="image-link"
          placeholder="Image Link"
          type="file"
          hidden
          id="image"
          onChange={convertToBase64}
        ></input>
        <div className="names">
          <input
            ref={firstName}
            className="first-name"
            placeholder="First Name"
          ></input>
          <input
            ref={lastName}
            className="last-name"
            placeholder="Last Name"
          ></input>
        </div>
        <input
          ref={location}
          className="location"
          placeholder="Location"
        ></input>
        <input
          ref={occupation}
          className="occupation"
          placeholder="Occupation"
        ></input>
        <label htmlFor="image">
          <p>Image</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z" />
          </svg>
        </label>
        <input ref={email} className="email" placeholder="Email"></input>
        <input
          ref={password}
          type="password"
          className="password"
          placeholder="Password"
        ></input>
        <button formAction="submit" onClick={clickHandler}>
          Register
        </button>
        <Link to="/login" className="link">
          Already have an account? Login here.
        </Link>
      </div>
    </Card>
  );
};

export default RegisterModal;
