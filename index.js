const port = 3000
const express = require('express')
const db = require('./db')
const app = express()
const path = require('path')
const blogCheck = require('./middlewares/isBlog')

app.use(blogCheck)
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));



app.use('/',require('./routes/mongoRoutes'))
app.use('/',require('./routes/adminRoutes'))
app.use('/',require('./routes/userRoutes'))








	
app.get('/', (req,res)=>{
    res.send('Welcome to BMS')
} )  

app.listen(port , ()=>{
	console.log(`server is runing on http://localhost:${port}`)
})
