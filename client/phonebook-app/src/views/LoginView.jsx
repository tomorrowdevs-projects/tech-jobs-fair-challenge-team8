import { useNavigate } from "react-router-dom";
import { useLogin } from "../api-hooks/useLogin";
import LoginForm from "../components/LoginForm";
import { Alert, Container } from "react-bootstrap";
import "../styles/login-view.css";

export default function LoginView() {
  const navigate = useNavigate();
  const { login, error } = useLogin(navigate);

  const handleLogin = (email, password) => {
    login(email, password, () => navigate("/contacts"));
  };

  return (
    <div className="bg-dark">
      <Container className="login-form-container">
        {error && (
          <Alert variant="danger" className="mt-2 w-100 text-center">
            {error}
          </Alert>
        )}
        <div className="login-form-wrapper">
          <LoginForm onLogin={handleLogin} />
        </div>
        <div className="text-white">
          Login with admin@admin.com, password, or user@user.com, password
        </div>
      </Container>
    </div>
  );
}
