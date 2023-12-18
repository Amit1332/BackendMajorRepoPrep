const jwt  = require('jsonwebtoken')

const auth = (req,res,next)=>{
    const data  = req.headers['authorization']
    const token  = data.split(' ')[0]
    const verify = jwt.verify(token,process.env.SECRET_KEY,(err,validate)=>{
        if(err){
            return res.json({err:err, msg:"Invalid Token"})
        }
        if(validate){
            req.user = verify.user
            return next()
        }
        else{
            return res.json({err:"Not Authorized"})
        }
    })



}



module.exports = auth