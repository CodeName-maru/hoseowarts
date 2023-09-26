
import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter"
import adminRouter from "./routers/adminRouter"

const app = express();

const logger = morgan('dev');

app.set("view engine","pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));


app.use ("/",userRouter);

