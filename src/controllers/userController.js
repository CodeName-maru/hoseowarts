import User from "../models/User";
import Survey from "../models/Survey"
import Counter from "../models/Counter";
import { query } from "express";



function getMode(array,surveyCurrent){
    var dict = {
        1:"griffindor",
        2:"huffulepuff",
        3:"ravenclaw",
        4:"slyderin",
    }

    let result = 0;
    let max = 0;
    let map1 = new Map();
    surveyCurrent.forEach((dorm,index)=>{
        if(dorm<245){
            map1.set(index+1,0)
        }
    })//dorm이 245보다 작으면 맵 요소 생성
    array.forEach((element)=>{
        map1.set(element,map1.get(element)+1)
        //array 순회 하며 키값에 맞는 밸루 값에 1 더하기
    })
    //맵에서 보기가 없으면 무슨일이 일어날지 몰랑 괜찮을거 같기도 하고
    for(var[key, value] of map1){
        if(value>max){
            max = value;
            result = key;
        }
    }

    return dict[result];
}

export const home = (req, res)=> res.render("home");
export const getLogin = (req, res)=> res.render("login");
export const postLogin = async (req, res)=> {
    const counter = await Counter.findOneAndUpdate(
        {_id: "userid" },
        {$inc:{seq:1}},
        {new:true}
    )
    const {name} = req.body;
    const user = new User({
        name,
        answerArray:[],
        result:"",
        questNum:1,
        chosenChild:(counter.seq%50) == 0
    });
    try{
        const dbUser = await user.save();
        return res.redirect(`/${dbUser.id}/survey`)
    }
    catch(error){
        console.log(error);
        return res.redirect("/login");
    }
    
};

export const getSurvey = async (req, res) =>{
    
    const { id } = req.params;
    const user = await User.findById(id)
    const survey = await Survey.findOne({number:user.questNum})
    
    return res.render("survey",{survey})
}



export const postSurvey = async (req, res) => {
    const { choice } = req.body;
    const { id } = req.params;
    const griffindor = await User.countDocuments({result: 1})
    const huffulepuff = await User.countDocuments({result: 2})
    const ravenclaw= await User.countDocuments({result: 3})
    const slyderin= await User.countDocuments({result: 4})
    const surveyCurrent =[griffindor,slyderin,huffulepuff,ravenclaw]
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
        if(user.questNum==12){
            user.answerArray.push(choice);
            if(user.result){}
            else{
                user.result=getMode(user.answerArray,surveyCurrent);
            }
            await user.save()
            if(user.chosenChild){
               return prophescy(req,res);
                
            }
        
            return res.redirect(`/${id}/result`)
        }
        user.answerArray.push(choice);
        user.questNum+=1;
        await user.save()
        console.log(user)
        return res.redirect(`/${id}/survey`)
    }
      
    
}

export const result = async(req,res) =>{
    
    const { id } = req.params;
    const user = await User.findById(id)
    const result = user.result;



    await user.save()
    return res.render('result',{result})
}



export const prophescy = async(req,res) =>{
    
    const { id } = req.params;
    
    return res.render('prophecy',{id})
}