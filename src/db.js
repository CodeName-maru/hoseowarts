require("dotenv").config() 
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jeonsy423:ybkX8dxgD6S4ufxg@cluster0.dzswzs4.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

const handleOpen = ()  => console.log("connected to DB")
const handleError =(error) => console.log("DB Error",error)

db.on("error", handleError);
db.once("open", handleOpen)