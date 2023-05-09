const express  = require("express")
const {CartModel} = require("../models/cart.model")
const cartRouter = express.Router()

cartRouter.post("/addtocart",async(req,res)=>{
    try{
        const newCart = new CartModel(req.body)
        await newCart.save()
        res.status(200).send({"Message":"New Product Added To Cart"})
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})

cartRouter.get("/data",async(req,res)=>{
    try{
        const cartData = await CartModel.find()
        res.status(200).send(cartData)
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})

module.exports={
    cartRouter
}