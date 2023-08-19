import "./login.scss";
import { useState } from "react";
import network from "../../assets/network-5508173_1280.png";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    try {
      const res = axios.post("localhost:3300/api/auth/login", {
        email: email,
        password: password,
      });
      sessionStorage.set(res.data.token);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };
  return (
    <div>
      <div className="hero">
        <div>InfoMate</div>
        <img src={network} alt="" />
      </div>
      <div className="caption">" Manage Team Details with Ease "</div>
      <div className="login">
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={!email || !password}
          style={{ cursor: !email || !password ? `not-allowed` : "pointer" }}
          onClick={handleClick}
        >
          SignIn
        </button>
        <div className="error">{error}</div>
        <div className="circle"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
}
