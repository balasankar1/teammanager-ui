import "./login.scss";
import { useState } from "react";
import network from "../../assets/network-5508173_1280.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    let res;
    try {
      res = await axios.post("http://localhost:3300/api/auth/signin", {
        email: email,
        password: password,
      });
      console.log(res);
      sessionStorage.set(res.data.token);
      console.log(res.data.token);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
    if (res) navigate("/dashboard");
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
          onClick={() => {
            handleClick();
          }}
        >
          SignIn
        </button>
        <div className="error">{error}</div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}
