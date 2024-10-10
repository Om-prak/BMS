const BlogSetup = require('../models/Blog_setup_model')


const isBlog = async (req,res,next)=>{

	try{
		const blogSetup = await BlogSetup.find({})

		if (blogSetup.length == 0 && req.originalUrl != '/BlogSetup') {
			res.redirect('/BlogSetup')
		} else {
			next()
		}

	}catch(error){
		console.log(error)
	}

}

module.exports = isBlog