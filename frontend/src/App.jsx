import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

import "./app.scss";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import WatchPage from "./components/pages/WatchPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => {
  return (
    <>
      <ToastContainer position="bottom-center" limit={1}></ToastContainer>
      <HomePage />
    </>
  );
};

export default App;
