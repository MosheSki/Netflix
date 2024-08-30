import { useContext, useState } from "react";
import "./loginpage.scss";
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/apiCalls";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from react-toastify

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password }, dispatch);
    } catch (error) {
      toast.error("Email or password is incorrect!");
    }
  };

  return (
    <div className="loginPage">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <Link to="/register" className="link">
            <span>
              New to Netflix? <b>Sign Up Now!</b>
            </span>
          </Link>
          <small>
            This is not actually Netflix!
            <br />
            All Rights Reserved © 2024
            <br />
            <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
