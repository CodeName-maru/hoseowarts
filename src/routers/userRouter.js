import express from "express";
import {home,getLogin,postLogin,getSurvey,postSurvey} from "../controllers/userController.js"


const userRouter = express.Router();

userRouter.get("/",home);
userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.route("/:id([0-9a-f]{24})/survey").get(getSurvey)


 
export default userRouter;