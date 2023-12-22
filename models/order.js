const mongoose = require('mongoose')


const schema  = new mongoose.Schema({
    isPaid:{
            type:String,
          
     },
     courseId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'courses',
        default:null
     },
     testId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'tests',
        default:null

     },
   
     userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user',
        required:true

      },
      customerId:{
        type:String

      },
      paymentIntentId:{
        type:String

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

const orders = new mongoose.model('orders', schema)

schema.set('timestamps', true)

module.exports= orders