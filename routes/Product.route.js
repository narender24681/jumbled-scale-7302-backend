const express = require("express")
const {ProductModel} = require("../models/Product.model")
const productRouter = express.Router()



// This Code is going to help  Admin for adding anything to backend database. Url Endpoint Is ->(/products/create)
productRouter.post("/create",async(req,res)=>{
    try{
        const newProduct = new ProductModel(req.body)
        await newProduct.save()
        res.status(200).send({"Message":"New Product Added Successfully"})
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})


//This Code is going to help  Admin for getting all the product that are present in backend database. Url Endpoint Is ->(/products)
productRouter.get('/',async(req,res)=>{
    const {category,gender,color,material,brand} = req.query
    console.log(category,gender,color)
    let query = {}
    if(category){
        query.category=category
    }
    if(gender){
        query.gender=gender
    }
    if(color){
        query.color=color
    }
    if(brand){
        query.brand=brand
    }
    if(material){
        query.material=material
    }
    try{
        const products = await ProductModel.find(query)
        res.status(200).send(products)
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})

// This Code is going to help  Admin for Updating products that are present in backend database. Url Endpoint Is ->(/products/update/:id)
productRouter.patch("/update/:id" , async(req,res)=>{
    const {id} = req.params
    try{
        await ProductModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"Message":"Product Updated Successfully"})
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})


// This Code is going to help  Admin for Deleting products that are present in backend database. Url Endpoint Is ->(/products/delete/:id)
productRouter.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
    try{
        await ProductModel.findByIdAndDelete({_id:id})
        res.status(200).send({"Message":"Product Deleted Successfully"})
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})

//Getting Products By there ID's
productRouter.get("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const product = await ProductModel.findById({_id:id})
        console.log(product)
        res.status(200).send(product)
    }catch(err){
        res.status(400).send({"Error":err.message})
    }
})



module.exports={
    productRouter
}


//Filter by gender , category , color ,
//Pagination - limit-5 per page

// sort by price -> h-l , l-h


// {
//     "image":"url-1",
//     "imagesArr":["url1","url2","url3"],
//     "title":"Tshirt",
//     "price":232,
//     "rating":4.5,
//     "description":"xyz",
//     "size":["L","M","S"],
//     "category":"Men",
//     "brand":"Levis",
//     "color":"Black",
//     "discount":32,
//     "quantity":1,
//     "gender":"Male",
//     "name":"Mens Tshirt",
//     "material":"cotton",
//     "type":"MEn",
//     "pattern":"xyz", 
//     "countryOfOrigin":"India"
// }