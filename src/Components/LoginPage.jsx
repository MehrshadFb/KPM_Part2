import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import FaceBook from "../Assets/facebook.jpg";
import Google from "../Assets/google.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(Boolean);
  const [error, setError] = useState(Boolean);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "mehrshad@gmail.com" && password === "1234") {
      setFlag(true);
      setError(false);
    } else {
      setFlag(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (flag) {
      navigate("/Welcome", { state: { email } });
    }
  }, [flag, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Sign In With</h1>
      </div>
      <div className="linked_btns">
        <button
          className="facebook_btn"
          onClick={(e) => {
            window.location.href = "https://www.facebook.com";
          }}
        >
          <img src={FaceBook} className="logo" />
          <b>Facebook</b>
        </button>
        <button
          className="google_btn"
          onClick={(e) => {
            window.location.href = "https://www.gmail.com";
          }}
          href=""
        >
          <img src={Google} className="logo"></img>
          <b>Google</b>
        </button>
      </div>
      <div>
        {error && <p className="error">Username or Password is incorrect!</p>}
      </div>
      <div>
        <label>Username</label>
        <br></br>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <label>
          Password
          <a href="" className="forgot_link">
            Forgot?
          </a>
        </label>
        <br></br>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <br></br>
      <div>
        <input type="submit" name="submit" value="Sign In"></input>
      </div>
      <div className="footer">
        <p>
          Not a Memeber? <a href="">Sign up now</a>
        </p>
      </div>
    </form>
  );
};

export default LoginPage;
