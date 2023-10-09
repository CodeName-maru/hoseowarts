import "dotenv/config";
import "regenerator-runtime";
import "./db";
import "./models/User";
import app from "./server";;
import '@babel/plugin-transform-runtime'

const PORT = process.env.PORT || 7000;
const handleListening = () => console.log(`Server listening on port ${PORT}`)

app.listen(PORT, handleListening);