import { useState } from "react";
import "../components-style/login.css";

export default function LoginForm({ onLogin, errorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    resetFormFields();
  };

  const resetFormFields = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container p-5 rounded bg-white">
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <h3 className="text-center">Sign In</h3>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-dark" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
