const mongoose  = require('mongoose')
const validator = require('validator')


const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:null
    },
    type:{
        type:String,
        required:true,
        default:"user"
    },
    email:{
        type:String,
        default:null,
        validate:[validator.isEmail,"please enter valid emai address"],
        required:[true, "please enter email"], 
    },
    mob:{
        type:String,
        default:null,
        max:[10, "mobile number should be 10"]
    },
    password:{
        type:String,
        default:null,
        required:[true ,"please enter password"]
    },
    colleges:{
        type:String,
        default:null,
    },
    passyear:{
        type:String,
        default:null,
    },
    deleted_At:{
        type:Date,
        default:null
    },
    display_from:{
        type:Date,
        default:Date.now
    },
    display_to:{
        type:Date,
        default:Date.now

    }

})
schema.set('timestamps',true)


const User  = new mongoose.model('user', schema)

module.exports = User