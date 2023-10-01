
import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter"
import adminRouter from "./routers/adminRouter"

const app = express();
const logger = morgan('dev');
var path = require('path');

app.set("view engine","pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));
app.use ("/",userRouter);
app.use("/admin",adminRouter);

export default app;