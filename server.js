/*const express=require('express')
const app=express()

//app.set('view engine','ejs')

//app.get('/',function(req,res){
   // res.send('<h1>hi cvr<h1>')
//})
app.set('view engine','ejs')
app.get('/',function(req,res){
  res.render('home',{user:"meghna"})
})
app.get('/post',(req,res)=>{
   res.end("this is post page")
})
app.get('/tweets',(req,res)=> {
    res.end("this is post tweets")
})

app.listen(5000)*/

const express=require('express')
const app=express()
app.use(express.json())
const posts=require("./routes/post")
app.use('/posts',posts)
//app.get("/posts/mypost",(req,res)=>{
   //res.send("posts")
//})
//app.get("/tweets/")


app.listen(5000,()=>{
   console.log("server started")
})