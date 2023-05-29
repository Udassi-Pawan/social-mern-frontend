import "./RegisterPage.css";
import HeaderAuth from "../components/HeaderAuth";
import Card from "../components/Card";
import RegisterModal from "../components/RegisterModal";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <HeaderAuth></HeaderAuth>
      <RegisterModal></RegisterModal>
    </div>
  );
};

export default RegisterPage;
