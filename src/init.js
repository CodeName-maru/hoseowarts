import "dotenv/config";
import '@babel/plugin-transform-runtime'
import "regenerator-runtime";
import "./db";
import "./models/User";
import "./models/Counter";
import "./models/Survey";

import app from "./server";;


const PORT = process.env.PORT || 7000;
const handleListening = () => console.log(`Server listening on port ${PORT}`)

app.listen(PORT, handleListening);