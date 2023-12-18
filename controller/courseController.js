const courses = require("../models/courses")



const allCourse = async()=>{
    try {
        let courses =await courses.find()
        res.status(200).json({success:true,data:courses})
        
    } catch (error) {
        res.status(500).json({err:"Internal Server Error"})

    }
}


const createCourse = async()=>{
try {
    const data  =  req.body
 if(!data.name || !data.price || !start_data || !duration){
    return res.status('404').json({success:false,msg:"Please enter all field"})
 }
 const courseName = data.name.toLowerCase();
 const existingCourse = await courses.aggregate([
   {
     $match: {
       name: courseName,
     },
   },
   {
     $limit: 1,
   },
 ]);

 if (existingCourse.length > 0) {
   return res.status(201).json({ success: false, msg: "This course already registered" });
 }
 await courses.create({ ...data, name: courseName });
  res.status(200).json({success:true, msg:"Course Registered Successfully"})
} catch (error) {
    res.status(500).json({err:"Internal Server Error"})
    
}
}







module.exports = {allCourse,createCourse}