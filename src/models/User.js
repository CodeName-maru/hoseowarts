import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    gryffindor:Number,
    slytherin:Number,
    ravenclaw:Number,
    Hufflepuff:Number,
    chosenChild:Boolean
})

const User = mongoose.model("User",userSchema);
export default User;