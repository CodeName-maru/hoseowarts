
export const home = (req, res)=> res.render("home");
export const getLogin = (req, res)=> res.render("login");
export const postLogin = (req, res)=> {
    console.log(req.body)
};
export const admin = (req, res) =>{
    return res.render("admin",{users})
}