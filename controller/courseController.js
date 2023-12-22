const courses = require("../models/courses")



const allCourse = async(req,res)=>{
    try {
        let course =await courses.find()
          res.status(200).json({success:true,data:course})
        
    } catch (error) {
        res.status(500).json({err:"Internal Server Error"})

    }
}




const createCourse = async(req,res)=>{
 
  try {
      const data  =  req.body
   if(!data.name || !data.price || !data.duration){
      return res.status('404').json({success:false,msg:"Please enter all field"})
   }
 
   await courses.create(data );
    res.status(200).json({success:true, msg:"Course Registered Successfully"})
  
  } catch (error) {
      res.status(500).json({err:"Internal Server Error"})
      
  }
  }








module.exports = {allCourse,createCourse}