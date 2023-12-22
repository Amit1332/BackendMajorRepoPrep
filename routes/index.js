const Router = require('express').Router()
const userRoutes = require('./userRoutes')
const courseRoutes = require('./coursesRoutes')
const testRoutes = require('./testRoutes')
const orderRoutes = require('./orderRoutes')







Router.use('/user',userRoutes)
Router.use('/courses',courseRoutes)
Router.use('/test',testRoutes)
Router.use('/order',orderRoutes)






module.exports =Router