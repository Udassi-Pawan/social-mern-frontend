import { useContext } from "react";
import { Context } from "../context";
import "./Card.css";

const Card = ({ children, className }) => {
  const [, , , , , , mode] = useContext(Context);
  const claas = mode ? "dark" : "none";
  let completete = `card ${className} ${claas}`;

  return <div className={completete}>{children}</div>;
};

export default Card;
