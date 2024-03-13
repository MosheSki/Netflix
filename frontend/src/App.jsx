import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

import "./app.scss";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import WatchPage from "./components/pages/WatchPage";
import LoginPage from "./components/pages/LoginPage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import MyListPage from "./components/pages/MyListPage";
import SearchResultsPage from "./components/pages/SearchResultsPage";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1}></ToastContainer>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <HomePage /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<HomePage type="movie" />} />
            <Route path="/series" element={<HomePage type="series" />} />
            <Route path="/myList" element={<MyListPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
