import "./db";
import "./models/User";
import app from "./server";;

const PORT = 7000;
const handleListening = () => console.log(`Server listening on port ${PORT}`)

app.listen(PORT, handleListening);