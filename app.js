const express =require('express')
const morgan= require('morgan')
const mongoose= require('mongoose')
const blogRoutes= require('./routes/blogRoutes')

// Express App
const app=express()

// Connect to mongoDb
// listen for requests
const dbURI= 'mongodb+srv://Venky:test1234@cluster0.r3ymfqe.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result)=>{
  app.listen(3000)
  console.log('Connected to db')
})
.catch((err)=>console.log(err))

// Register view Engine
app.set('view engine', 'ejs')


// middleware & static files
app.use(express.static('public'))   
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

// mongoose and mongo sandbox routes

// routes
app.get('/',(req,res)=>{
  res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    res.render('about',  {title:'About'})
})

// blog routes
app.use('/blogs',blogRoutes)

app.use((req,res)=>{
    res.status(404).render('404', { title: '404' })
})
