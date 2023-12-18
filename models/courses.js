const mongoose = require('express')


const schema  = new mongoose.Schema({
    name:{
        type:String,
        default:null,
        required:[true,"please enter course name"]
    },
    price:{
        type:String,
        required:[true,"please enter course price"],
        default:0
    },
    start_data:{
            type:Date,
            default:null,
            required:date
    },
    duration:{
        type:String,
        required:true
    },
    isPaid:{
            type:Boolean,
            default:false
     },
     enroll:{
        type:Boolean,
        default:false
     },
     user:{
        type:mongoose.Schema.Types.ObjectId.schema.Object,
        ref:'user',
        required:true

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

const courses = new mongoose.model('courses', schema)

schema.set('timestamps', true)

module.exports= courses