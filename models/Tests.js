const mongoose = require('mongoose')


const schema  = new mongoose.Schema({
    name:{
        type:String,
        default:null,
        required:[true,"please enter test name"]
    },
    price:{
        type:String,
        required:[true,"please enter test price"],
        default:0
    },
    type:{
        type:String,
        required:true

    },
    start_data:{
            type:Date,
            default:null,
    },
    duration:{
        type:String,
        required:true
    },
    isPaid:{
            type:Boolean,
            default:false
     },
     img_url:{
        type:String,
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

const tests = new mongoose.model('tests', schema)

schema.set('timestamps', true)

module.exports= tests