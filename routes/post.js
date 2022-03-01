const express=require("express")
router=express.Router()

let postdb={}

router.use('/mypost',(req,res)=>{
    let username=req.params.name
    console.log(username)
    //let requestedRecord=postdb.forEach((i)=>{
      //  if(i.name==username){
        //    return i
       // }  
    })
    //res.send("mypost msg")
//})

router.post('/',(req,res)=> {
    console.log(req.body)
res.send(req.body)
}) 



router.get('/',(req,res)=>{
    res.send(postdb)
})