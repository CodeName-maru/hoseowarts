import User from "../models/User";
import Survey from "../models/Survey"
import { query } from "express";

function getMode(array){
    let result = 0;
    let max = 0;
    let map1 = new Map([
        [1,0],[2,0],[3,0],[4,0]
    ]);
    array.forEach((element)=>{
        map1.set(element,map1.get(element)+1)
    })
    for(var[key, value] of map1){
        if(value>max){
            max = value;
            result = key;
        }
    }
    return result;
}

export const home = (req, res)=> res.render("home");
export const getLogin = (req, res)=> res.render("login");
export const postLogin = async (req, res)=> {

    const {name} = req.body;
    const user = new User({
        name,
        answerArray:[],
        result:"",
        questNum:1,
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

let count = 0;
export const getSurvey = async (req, res) =>{
    
    const { id } = req.params;
    const user = await User.findById(id)
    const survey = await Survey.findOne({number:user.questNum})
    
    return res.render("survey",{survey})
}



export const postSurvey = async (req, res) => {
    const { choice } = req.body;
    const { id } = req.params;
    const user = await User.findById(id)

    if(choice == 0 || choice==null){
        if (user.questNum==1){
            await User.findByIdAndDelete(id);
            return res.redirect(`/login`)
        }
        user.answerArray.pop();
        user.questNum-=1;
        await user.save()
        
        return res.redirect(`/${id}/survey`)
    }

    else{
        if(user.questNum==3){
            user.answerArray.push(choice);
            if(user.result){}
            else{
                count += 1;
                user.result=getMode(user.answerArray);
            }
            await user.save()
            return res.redirect(`/${id}/result`)
        }
        user.answerArray.push(choice);
        user.questNum+=1;
        await user.save()
        return res.redirect(`/${id}/survey`)
    }
    
}

export const result = async(req,res) =>{
    const { id } = req.params;
    const user = await User.findById(id)
    const result = user.result;
    if (count%20==0){
        user.chosenChild = true;
    }
    console.log(count)
    
    await user.save()
    return res.render('result',{result})
}