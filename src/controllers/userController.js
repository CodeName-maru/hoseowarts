import User from "../models/User";

export const home = (req, res)=> res.render("home");
export const getLogin = (req, res)=> res.render("login");
export const postLogin = async (req, res)=> {

    const {name} = req.body;
    const user = new User({
        name,
        answerArray:[],
        chosenChild:false
    });
    try{
        const dbUser = await user.save();
        return res.redirect(`/${dbUser.id}/survey`)
    }
    catch(error){
        console.log(error);
        return res.redirect("/admin");
    }
    
};

export const getSurvey = async (req, res) =>{
    const { id } = req.params;
    const users = await User.findById(id)
    return res.render("survey")
    

}