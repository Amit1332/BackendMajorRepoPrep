const tests = require("../models/Tests")



const alltests = async(req,res)=>{
    try {
        let test =await tests.find()
          res.status(200).json({success:true,data:test})
        
    } catch (error) {
        res.status(500).json({err:"Internal Server Error"})

    }
}




const createTest = async(req,res)=>{
 
  try {
      const data  =  req.body
   if(!data.name || !data.price || !data.duration || !data.type){
      return res.status('404').json({success:false,msg:"Please enter all field"})
   }
 
   await tests.create(data );
    res.status(200).json({success:true, msg:"test Registered Successfully"})
  
  } catch (error) {
      res.status(500).json({err:"Internal Server Error"})
      
  }
  }








module.exports = {alltests,createTest}