import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions.jsx";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("users/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    throw new Error("Login failed");
  }
};
