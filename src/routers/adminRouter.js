import express from "express";
import { admin,getMkSurvey,postMKSurvey} from "../controllers/adminController";
import userRouter from "./userRouter";

const adminRouter = express.Router();

adminRouter.get("/",admin);
adminRouter.route("/MKsurvey").get(getMkSurvey).post(postMKSurvey)

export default adminRouter;
