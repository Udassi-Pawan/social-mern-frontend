import HeaderAuth from "../components/HeaderAuth";
import "./LoginPage.css";
import Card from "../components/Card";
import LoginModal from "../components/LoginModal";
const LoginPage = () => {
  return (
    <div className="login-page">
      <HeaderAuth></HeaderAuth>
      <LoginModal></LoginModal>
    </div>
  );
};

export default LoginPage;
