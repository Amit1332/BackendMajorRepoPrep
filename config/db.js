const mongoose  = require('mongoose')


const databaseConn = ()=>{

    try {
        mongoose.connect(`${process.env.MONGODB_URI}`).then(()=>{
            console.log("connection successfull");
        }).catch((error)=> console.log("no connection"))
    } catch (error) {
        console.log("sorry",error);
    }
}


module.exports = databaseConn