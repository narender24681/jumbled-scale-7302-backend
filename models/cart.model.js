const mongoose =require("mongoose")

const cartSchema = mongoose.Schema({
    title:String,
    price:Number,
    discount:String,
    userid:String
},{
    versionKey:false
})

const CartModel = mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}

//cart - >  price  ,  .   