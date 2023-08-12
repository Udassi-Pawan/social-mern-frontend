import HeaderAuth from "../components/HeaderAuth";
import "./LoginPage.css";
import Card from "../components/Card";
import LoginModal from "../components/LoginModal";
import { useContext } from "react";
import { Context } from "../context";
import LoadingSpinner from "../components/LoadingSpinner";
const LoginPage = () => {
  const [, , , , , , , , loading, setLoading] = useContext(Context);
  return (
    <div>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div div className="login-page">
          <HeaderAuth></HeaderAuth>
          <LoginModal></LoginModal>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
