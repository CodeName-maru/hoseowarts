require("dotenv").config() 
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://MaruLee423:n36Tfj0NbZWAD5ig@cluster0.1mxqgff.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

const handleOpen = ()  => console.log("connected to DB")
const handleError =(error) => console.log("DB Error",error)

db.on("error", handleError);
db.once("open", handleOpen)