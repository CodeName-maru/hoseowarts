import User from "../models/User";

export const home = (req, res)=> res.render("home");
export const getLogin = (req, res)=> res.render("login");
export const postLogin = async (req, res)=> {
    const {name} = req.body;
    try{
        await User.create({
            name,
            gryffindor:0,
            slytherin:0,
            ravenclaw:0,
            Hufflepuff:0,
            chosenChild:false
            
        })
        return res.redirect("/admin")
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