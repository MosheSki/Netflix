import express from "express";
import expressAsyncHandler from "express-async-handler";
import { register, login, deleteUser } from "../controllers/userController.js";
import { isAuth } from "../utils.js";

const userRouter = express.Router();

userRouter.post("/login", expressAsyncHandler(login));
userRouter.post("/register", expressAsyncHandler(register));
userRouter.delete("/:id", isAuth, expressAsyncHandler(deleteUser));

export default userRouter;
