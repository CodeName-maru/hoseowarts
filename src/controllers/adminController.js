import User from "../models/User";
import Survey from "../models/Survey";


export const admin = async (req, res) =>{
    const users = await User.find({}).sort({createdAt:"desc"});
    const griffindor = await User.countDocuments({result: 1})
    const slyderin = await User.countDocuments({result: 2})
    const huffulepuff= await User.countDocuments({result: 3})
    const ravenclaw= await User.countDocuments({result: 4})
    return res.render("admin",{users,griffindor,slyderin,huffulepuff,ravenclaw})
}
