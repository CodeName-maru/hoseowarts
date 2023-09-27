import express from "express";
import { admin,getSurveyDB } from "../controllers/adminController";
import userRouter from "./userRouter";

const adminRouter = express.Router();

adminRouter.get("/",admin)
adminRouter.get("/surveyDB",getSurveyDB)

export default adminRouter;
