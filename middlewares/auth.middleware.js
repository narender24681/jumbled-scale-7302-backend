var jwt = require('jsonwebtoken');


const auth = (req,res,next) =>{
    const token = req.headers.authorization
    try{
        if(token){
            var decoded = jwt.verify(token.split(' ')[1], 'quickKart');
            if(decoded){
                req.body.userid=decoded.userid
                console.log(decoded)
                next()
            }else{
                res.status(400).send({"error":"Please Enter A Valid Token Fast"})
            }
        }else{
            res.status(400).send({"error":"Please Enter A Valid Token Fast"})
        }
    }catch(err){
        res.status(400).send({"error":err.message})
    }
}

module.exports={
    auth
}