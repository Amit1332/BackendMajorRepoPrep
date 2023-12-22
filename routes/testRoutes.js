const { createTest, alltests } = require('../controller/testController')
const auth = require('../middleware/auth')

const Router = require('express').Router()


Router.get('/',alltests)
Router.post('/create',createTest)



module.exports = Router