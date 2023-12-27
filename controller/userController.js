const {hashPassword,generateToken, comparePassword} = require('../middleware/middleware')
const User = require('../models/user')


const profile = async(req,res)=>{
    try {


     const useremail = req.user.email

     const user = await User.findOne({email:useremail})
     res.status(200).json({success:true,user})
    } catch (error) {
        console.log(error);
    }
}



const login =async (req,res)=>{
    const data = req.body
  
    if(!data.email || !data.password){
        return res.json({success:false,info:"please fill with email and Password"})
    
    }
   const userData = await User.findOne({email:data.email})

   if(userData){
    const checkPass =await comparePassword(data.password,userData.password)

    if(checkPass){
    const token =await generateToken(userData)
    return res.status(200).json({success:true,msg:"Login Successfully", token:token})

    }
    return res.status(200).json({success:false,info:"Login Successfully", token:token})

   }
   else{
    return res.json({success:false,info:"Please Signup First"})

   }
}




const signup =async (req,res)=>{
    const data = req.body
    if(!data.email || !data.password){
        return res.json({success:false,info:"please fill with email and Password"})
    
    }
    const isExist =await User.findOne({email:data.email})
    if(isExist){
        return res.json({success:false,info:"user already exist"})
    }
     data.password =await hashPassword(data.password)

     User.create(data)

    const setuserToken =await User.findOne({email:data.email})
    if(setuserToken){
        const token =await generateToken(setuserToken)
         res.status(200).json({success:true,msg:"Register Successfully", token:token})
    }
    else{
        return res.json({success:false,info:"Invalid User"})
        
    }

}

module.exports = {profile,login,signup}