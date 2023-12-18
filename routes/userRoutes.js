const { profile, signup, login } = require('../controller/userController')
const auth = require('../middleware/auth')

const Router = require('express').Router()


Router.get('/',auth,profile)
Router.post('/signup',signup)
Router.post('/login',login)



module.exports = Router