const app = require("./app");
const databaseConn = require("./config/db");



const PORT= process.env.PORT
const server = app.listen(PORT,async()=>{
    try {
       await databaseConn()
        console.log(`server is running on port ${PORT}`);  
    } catch (error) {
      console.log("no Connection", error);  
    }
})