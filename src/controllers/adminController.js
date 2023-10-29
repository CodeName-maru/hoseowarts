import User from "../models/User";
import Survey from "../models/Survey";


export const admin = async (req, res) =>{
    const users = await User.find({}).sort({createdAt:"desc"});
    const griffindor = await User.countDocuments({result: "griffindor"})
    const slyderin = await User.countDocuments({result: "slyderin"})
    const huffulepuff= await User.countDocuments({result: "huffulepuff"})
    const ravenclaw= await User.countDocuments({result: "ravenclaw"})
    return res.render("admin",{users,griffindor,slyderin,huffulepuff,ravenclaw})
}
