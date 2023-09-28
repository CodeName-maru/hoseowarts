import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    createdAt:{type: Date, required: true, default: Date.now},
    name:String,
    answerArray:[{type:Number}],
    questNum:Number,
    result:String,
    chosenChild:Boolean
})

const User = mongoose.model("User",userSchema);
export default User;