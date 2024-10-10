const BlogSetting = require('../models/Blog_setup_model')
const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const path = require('path')
const session = require('express-session')





const loadLogin =(req,res)=>{
	res.render('login')
}

const verifyLogin =(req,res)=>{
	console.log(req.body)
	res.redirect('/login')
}


module.exports = {
	loadLogin,verifyLogin
}