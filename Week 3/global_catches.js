const express=require('express');

const app=express();

app.use(express.json());


app.post('/health-checkup',(req,res)=>{
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;

    res.send("you have "+kidneyLength+" kidneys");
})

//global catches(catches every error and  divert it to this route)
//also called as error handling middleware
app.use(function(err,req,res,next){
    res.json({
        msg: "something is up with our servers"
    })
})

app.listen(3000,()=>{
    console.log("app is listening to 3000");
})
