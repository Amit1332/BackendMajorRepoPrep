const {checkout,checkoutHook,getOrder} = require('../controller/orderController')
const auth = require('../middleware/auth')

const express = require('express')
const Router =express.Router()

Router.post('/checkout',auth,checkout)
Router.post('/webhook',express.raw({type: 'application/json'}),checkoutHook)
Router.get('/',auth,getOrder)




module.exports = Router