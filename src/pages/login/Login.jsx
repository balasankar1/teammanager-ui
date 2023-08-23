import "./login.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StyleText from "../../components/wavy text/WavyText";
import icon from "../../assets/group.png";

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
      sessionStorage.setItem("userToken", res.data.token);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
        window.location.reload();
      }
    }
    if (res) navigate("/dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="top">
        <StyleText />
        <div className="top-text">Manage team details with ease</div>
      </div>

      <div className="login">
        <div className="login-top">
          <img className="card-logo" src={icon} alt="img" />
          <h1>Sign In</h1>
        </div>

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
    </motion.div>
  );
}
