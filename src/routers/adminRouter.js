import express from "express";
import { admin} from "../controllers/adminController";
import userRouter from "./userRouter";

const adminRouter = express.Router();

adminRouter.get("/",admin);

export default adminRouter;
