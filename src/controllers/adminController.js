import User from "../models/User";

export const admin = async (req, res) =>{
    const users = await User.find({});
    return res.render("admin",{users})
}
export const getSurveyDB = async(req,res) =>{
    
}
export const postSurveyDB = async(req,res) =>{
    
}