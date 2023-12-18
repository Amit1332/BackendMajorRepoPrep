const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken')



const hashPassword = async(password)=>{
    if(password){
        password = await bcrypt.hash(password,11)
        return password
    }

}


const comparePassword = async(password,storePassword)=>{
   if( password){
    password= await bcrypt.compare(password,storePassword)
     return password

   }
}


const generateToken = async(user)=>{
    let token  = await jwt.sign({user:user},process.env.SECRET_KEY,{expiresIn:process.env.expires_at*24*60*60*100})
    return token
}



module.exports = {hashPassword,comparePassword,generateToken}