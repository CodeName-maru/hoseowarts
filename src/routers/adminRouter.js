import express from "express";
import { admin} from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/",admin);

export default adminRouter;
