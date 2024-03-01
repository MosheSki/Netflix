import express from "express";
import expressAsyncHandler from "express-async-handler";
import { create, deleteList, get } from "../controllers/listController.js";
import { isAuth } from "../utils.js";

const listRouter = express.Router();

listRouter.post("/", isAuth, expressAsyncHandler(create));

listRouter.delete("/:id", isAuth, expressAsyncHandler(deleteList));

listRouter.get("/", isAuth, expressAsyncHandler(get));

export default listRouter;
