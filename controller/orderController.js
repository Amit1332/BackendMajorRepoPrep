const orders = require('../models/order');

const Stripe = require('stripe')

require("dotenv").config()

const stripe= Stripe(process.env.STRIPE_KEY)
const checkout = async(req,res)=>{

    const customer =await stripe.customers.create({
        metadata:{
            userId:req.user._id,
            cart:JSON.stringify(req.body)
        }
    })
    try {
       const lineItems=  req.body.map(item=>{
            return {
                price_data:{
                    currency:"inr",
                    product_data:{
                        name:item.name
                    },
                    unit_amount:(item.price)*100
                },
                quantity:item.quantity
            }

        });
        const session =await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:"payment",
            customer:customer.id,
            line_items:lineItems,
            success_url:`${process.env.CLIENT_URL}/#/payment/success`,
            cancel_url:`${process.env.CLIENT_URL}/#/payment/cancel`
        })
        res.json({id:session.id})
    } catch (error) {
      console.log(error);
    }

}



const createOrder = async(customer,data)=>{
    const items = JSON.parse(customer.metadata.cart)
    let storedata = {
        userId:customer.metadata.userId,
        customerId:data.customer,
        paymentIntentId:data.payment_intent, 
        isPaid:data.payment_status,
        courseId:null,
        testId:null
    }
    
    if(items[0].testId){
        storedata.testId = items[0].testId
    }
    else{
        storedata.courseId = items[0].courseId

    }
   
    try {
        const savedOrder = await orders.create(storedata)        
    } catch (error) {
        console.log(error);
    }
    
}


let endpointSecret ; 
// endpointSecret="whsec_52bdbb6ca0bd85dd68fc94cc7d28506e3e05eb5f37f7cddc170b788ef1fbfe7b";
  const checkoutHook = async(req,res)=>{
    const sig = req.headers['stripe-signature'];
  
    let data;
    let eventType;
    if(endpointSecret){
        let event;

        try {

            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
            console.log("webhook verified");
          } catch (err) {
              console.log(`webhook Error : ${err.message}`);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
          }
          data = event.data.object;
          eventType =event.type
    }
    else{
        data =req.body.data.object
        eventType =req.body.type
    }
  
  if(eventType==="checkout.session.completed"){
stripe.customers.retrieve(data.customer).then((customer)=>{
   createOrder(customer,data)
}).catch((error)=>console.log(error.message))
  }
  
    res.send().end();
  }





const getOrder = async(req,res)=>{
    try {
        let userid = req.user._id
        const data  = await orders.find({userId:userid}).populate('courseId').populate('testId');
        res.status(200).json({success:true,data})
        
    } catch (error) {
        console.log(error);
        
    }

}




module.exports ={checkout,checkoutHook,getOrder}