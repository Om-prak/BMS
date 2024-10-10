const BlogSetting = require('../models/Blog_setup_model')
const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const path = require('path')


const securePassword = async(password)=>{
	try {
		const passwordHash = await bcrypt.hash(password,10)
		return passwordHash
	} catch(e) {
		// statements
		console.log(e);
	}
};

const blogSetup = async(req,res)=>{
	res.render('blog_setup')

	try {

		const blogSetting = await BlogSetting.find()
		if (blogSetting.length >0) {
			res.redirect('/login')
		} else {
			res.render('blog_setup')
		}

	} catch(e) {
		// statements
		console.log(e);
	}
}

const blogSetupSave = async(req,res)=>{
	try {

		const extension = path.extname(req.file.originalname)

		const blog_title = req.body.name
		const blog_image = req.file.originalname.replace(extension,'') + extension
		const description = req.body.description
		const name = req.body.name
		const email = req.body.email
		const password = await securePassword(req.body.password)

		const blogSetting = new BlogSetting({
			title:blog_title,
			description:description,
			images:blog_image,
		})

		await blogSetting.save()

		const user = new User({
			name:name,
			email:email,
			password:password,
			is_admin:"1",
			token:'',
		})


		const userData = await user.save()
		if (userData) {
			res.redirect('/login')
		} else {
			res.render('blog_setup',{message:'blog setup error'})
		}



	} catch(e) {
		// statements
		console.log(e);
	}
}

module.exports = {blogSetup,blogSetupSave}