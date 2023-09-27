import User from "../models/User";

export const admin = async (req, res) =>{
    const users = await User.find({});
    return res.render("admin",{users})
}