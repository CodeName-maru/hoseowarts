import express from "express";
import {home,getLogin,postLogin,admin} from "../controllers/userController.js"


const userRouter = express.Router();
userRouter.get("/admin",admin)
userRouter.get("/",home);
userRouter.route("/login").get(getLogin).post(postLogin);


 
export default userRouter;