import express from "express";
import {result,home,getLogin,postLogin,getSurvey,postSurvey, prophescy} from "../controllers/userController.js"


const userRouter = express.Router();

userRouter.get("/",home);
userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.route("/:id([0-9a-f]{24})/survey").get(getSurvey).post(postSurvey)
userRouter.get("/:id([0-9a-f]{24})/result",result);
userRouter.get("/:id([0-9a-f]{24})/prophescy",prophescy);



 
export default userRouter;