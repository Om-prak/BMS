const express = require('express')
const adminRouter = express()
const Blog = require('../models/Blog_setup_model')
const adminController = require('../controllers/adminController')
const bodyParser = require('body-parser')
const multer  = require('multer')
const path = require('path')
// // parse application/x-www-form-urlencoded
// adminRouter.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// adminRouter.use(bodyParser.json())


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../public/images/uploads'))
  },
  filename: function (req, file, cb) {
  	const extension = path.extname(file.originalname)
    cb(null, file.originalname.replace(extension,'') + extension)
  }
})

const upload = multer({ storage: storage })

adminRouter.get('/BlogSetup',adminController.blogSetup);
adminRouter.post('/BlogSetup',upload.single('images'),adminController.blogSetupSave);


module.exports = adminRouter