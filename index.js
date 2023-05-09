const express = require("express")
const { connection } = require("./cofigs/db")
require('dotenv').config()
const {productRouter} = require("./routes/Product.route")
const {userRouter} = require("./routes/User.route")
const {auth} = require('./middlewares/auth.middleware')
const {cartRouter} = require("./routes/Cart.router")
const app = express()
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use('/user',userRouter)
// app.use(auth)


app.use("/products",productRouter)
app.use("/cart",auth,cartRouter)


//This Is Server Listining Part
const port = process.env.port
app.listen(port , async()=>{
    try{
        await connection
        console.log("Mongo Server Is Running")
    }catch(err){
        console.log("Mongo Server Is Not Working Properly")
        console.log(err)
    }
    console.log(`Server Is Running On Port No ${port}`)
})

//category - tshirt pant