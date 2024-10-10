const express = require('express')
const userRouter = express()
const Blog = require('../models/Blog_setup_model')
const userController = require('../controllers/userController')
const bodyParser = require('body-parser')
const multer  = require('multer')
const path = require('path')
const config = require('../config/config')
const session = require('express-session')


userRouter.use(session({
	secret:config.sessionSecret
}))


userRouter.get('/login',userController.loadLogin)
userRouter.post('/login',userController.verifyLogin)




module.exports = userRouter