const { createCourse, allCourse } = require('../controller/courseController')
const auth = require('../middleware/auth')

const Router = require('express').Router()


Router.get('/',allCourse)
Router.post('/create',createCourse)



module.exports = Router