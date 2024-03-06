import express from "express";
import expressAsyncHandler from "express-async-handler";
import {
  addToMyList,
  create,
  deleteList,
  get,
} from "../controllers/listController.js";
import { isAuth } from "../utils.js";

const listRouter = express.Router();

listRouter.post("/", isAuth, expressAsyncHandler(create));

listRouter.delete("/:id", isAuth, expressAsyncHandler(deleteList));

listRouter.get("/", isAuth, expressAsyncHandler(get));

listRouter.post("/:id", isAuth, expressAsyncHandler(addToMyList));

export default listRouter;
