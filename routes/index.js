const Router = require('express').Router()
const userRoutes = require('./userRoutes')
const courseRoutes = require('./coursesRoutes')





Router.use('/user',userRoutes)
Router.use('/courses',courseRoutes)




module.exports =Router