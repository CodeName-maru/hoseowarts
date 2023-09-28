import User from "../models/User";
import Survey from "../models/Survey";

export const admin = async (req, res) =>{
    const users = await User.find({}).sort({createdAt:"desc"});
    return res.render("admin",{users})
}
export const getMkSurvey = (req,res) =>{
    
    return res.render("mkSurvey")
}
export const postMKSurvey = async(req,res) =>{
    const survey = req.body;
    await Survey.create(survey);
    return res.render("mkSurvey")
}