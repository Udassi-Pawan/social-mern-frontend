import { useContext } from "react";
import { Context } from "../context";
import "./DarkProvider.css";
import "./MediaQueries.css";
const DarkProvider = ({ children }) => {
  const [, , , , , , mode,] = useContext(Context);

  const claas = mode ? "dark" : "";

  return <div className={claas}>{children}</div>;
};
export default DarkProvider;
