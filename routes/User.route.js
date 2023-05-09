const express = require("express");
const {UserModel} = require("../models/User.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userRouter = express.Router()

//This Is User signup Router
userRouter.post("/signup",async(req,res)=>{
    const {firstName,lastName,userName,email,password} = req.body
    try{
        bcrypt.hash(password, 5,async(err, hash)=> {
            const newUser = new UserModel({firstName,lastName,userName,email,password:hash})
            await newUser.save()
            res.status(200).send({"message":"New User Registerd Successfully"})
        });
    }catch(err){
        res.status(400).send({"error":err.message})
    }
})


// This User Login Part

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const user = await UserModel.findOne({email})
    try{
        if(user){
            bcrypt.compare(password, user.password, async(err, result)=> {
                if(result){
                    var token = jwt.sign({userid:user._id }, 'quickKart');
                    res.status(200).send({"Message":`Hey ${user.firstName} Welcome To Quick Kart`,"token":token})
                }else{
                    res.status(200).send({"Error":"Please Enter Correct Password"})
                }
            });
        }else{
            res.status(200).send({"Error":"Please Enter Correct Credential"})
        }
    }catch(err){
        res.status(400).send({"error":err.message})
    }
})



module.exports={
    userRouter
}
//ROuter Page