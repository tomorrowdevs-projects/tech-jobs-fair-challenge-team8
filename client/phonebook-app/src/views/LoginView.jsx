import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import LoginForm from "../components/LoginForm";

export default function LoginView() {
  const navigate = useNavigate();
  const { login, error } = useLogin(navigate);

  console.log(login);

  const handleLogin = (email, password) => {
    login(email, password);
  };

  return (
    <div className="login-template d-flex justify-content-center align-items-center vh-100 bg-dark">
      <LoginForm onLogin={handleLogin} errorMessage={error} />
    </div>
  );
}
