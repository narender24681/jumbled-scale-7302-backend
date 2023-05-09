const mongoose = require("mongoose")

//This is Schema Of Product Collections

const productSchema = mongoose.Schema(
    {
        image:String,
        imagesArr:[String],
        title:String,
        price:Number,
        rating:Number,
        description:String,
        size:[String],
        category:String,
        brand:String,
        color:String,
        discount:Number,
        quantity:Number,
        gender:String,
        name:String,
        material:String,
        type:String,
        pattern:String,
        countryOfOrigin:String
        
    },{
        versionKey:false
    }
)


//This IS Model Of Product Collections

const ProductModel = mongoose.model("product",productSchema)

module.exports={
    ProductModel
}




// ,
//     "productDetails":{
//       "name":"Levis Tshirt",
//       "material":"Cotten",
//       "type":"Men",
//       "pattern":"xyz",
//       "countryOfOrigin":"Indian"
//     }


// const productSchema = mongoose.Schema(
//     {
//         image:String,
//         imagesArr:[String],
//         title:String,
//         price:Number,
//         rating:Number,
//         description:String,
//         size:String,
//         category:String,
//         productDetails:{
//             name:String,
//             material:String,
//             type:String,
//             pattern:String,
//             countryOfOrigin:String
//         }
//     },{
//         versionKey:false
//     }
// )


// {
//     "image":"imgurl",
//     "imagesArr":["url1","url2","url3"],
//     "title":"Mens Tshirt",
//     "price":499,
//     "rating":4.5,
//     "description":"Mens Best Tshirt By Quick Kart",
//     "size":"L",
//     "category":"Men"
// }

//category -> 



// {
//     "image":"https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-sari/e/p/c/free-designer-dindla-unstitched-original-imafpt5nncn35ayu.jpeg?q=70",
//     "imagesArr":["https://rukminim1.flixcart.com/image/832/832/k7m8brk0/sari/y/p/q/free-mfs-66-black-mahalaxmi-fashion-unstitched-original-imafpt5nfcqxucjk.jpeg?q=70","https://rukminim1.flixcart.com/image/832/832/kwb07m80/sari/e/n/g/free-designer-clemira-unstitched-original-imag9yjnhffshhuh.jpeg?q=70","https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-sari/q/z/o/free-fancy-saree-yatri-silk-mills-unstitched-original-imafpt5nvgbxhqc7.jpeg?q=70"],
//     "title":"Embellished, Embroidered Bollywood Georgette Saree  (Black)",
//     "price":6809,
//     "rating":4.5,
//     "description":"A kid's t-shirt is a type of clothing designed for children to wear on their upper body. It is typically made of soft and comfortable material, such as cotton or polyester, that is gentle on a child's skin. Kid's t-shirts come in various colors, designs, and patterns, and may feature pictures, logos, or slogans that appeal to children.",
//     "size":["L","M","S","XL"],
//     "category":"saree",
//     "brand":"Levis",
//     "color":"white",
//     "discount":32,
//     "quantity":1,
//     "gender":"Female",
//     "name":"Saree",
//     "material":"fiber",
//     "type":"Kid",
//     "pattern":"Hodded", 
//     "countryOfOrigin":"India"
// }