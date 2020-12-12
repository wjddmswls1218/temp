import express from "express";
import globalController from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.initController);  
globalRouter.get("/list", globalController.listController);

export default globalRouter; //외부에서 사용할 수 있게 expoer default를 해준다.


