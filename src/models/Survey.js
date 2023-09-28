import mongoose, { Schema } from "mongoose";

const SurveySchema = new mongoose.Schema({
        number: Number,
        question: String,
        answer1: String,
        answer2: String,
        answer3: String,
        answer4: String,

})

const Survey = mongoose.model("Survey",SurveySchema);
export default Survey;