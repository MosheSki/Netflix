import express from "express";
import expressAsyncHandler from "express-async-handler";
import {
  create,
  update,
  deleteContent,
  get,
  getRandom,
  getAll,
  getByTitle,
} from "../controllers/contentController.js";
import { isAuth } from "../utils.js";

const contentRouter = express.Router();

contentRouter.post("/", isAuth, expressAsyncHandler(create));
contentRouter.put("/:id", isAuth, expressAsyncHandler(update));
contentRouter.delete("/:id", isAuth, expressAsyncHandler(deleteContent));

contentRouter.get("/find/:id", isAuth, expressAsyncHandler(get));
contentRouter.get("/random", isAuth, expressAsyncHandler(getRandom));
contentRouter.get("/", isAuth, expressAsyncHandler(getAll));
contentRouter.get("/title/:search", isAuth, expressAsyncHandler(getByTitle));

export default contentRouter;
