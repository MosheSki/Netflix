import { useRef, useState } from "react";
import "./registerpage.scss";
import { toast } from "react-toastify"; // Import toast from react-toastify

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleStart = () => {
    const enteredEmail = emailRef.current.value.trim(); // Trim whitespace from email
    if (!validateEmail(enteredEmail)) {
      // Validate email
      toast.error("Please enter a valid email address");
      return;
    }
    setEmail(enteredEmail);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="registerPage">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="Email Address"
              required
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            {/* <input type="username" placeholder="username" ref={usernameRef} /> */}
            <input
              type="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
