import "./RegisterPage.css";
import HeaderAuth from "../components/HeaderAuth";
import Card from "../components/Card";
import RegisterModal from "../components/RegisterModal";
import { useContext } from "react";
import { Context } from "../context";
import LoadingSpinner from "../components/LoadingSpinner";

const RegisterPage = () => {
  const [, , , , , , , , loading, setLoading] = useContext(Context);

  return (
    <div>
      {loading ? (
        <LoadingSpinner> </LoadingSpinner>
      ) : (
        <div className="register-page">
          <HeaderAuth></HeaderAuth>
          <RegisterModal></RegisterModal>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
