import "./loginpage.scss";

const LoginPage = () => {
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
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign Up Now!</b>
          </span>
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
