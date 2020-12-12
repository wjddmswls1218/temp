import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.initController);  
globalRouter.get("/list", globalController.listController);

export default globalRouter;


