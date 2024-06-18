const express=require('express');

const app=express();

let numberOfRequest=0;

//counting number of requests 
function calculateRequest(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next()

}

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="divyanshu" || password!="pass"){
        res.status(400).json({"msg" : "somethings up with your inputs"});
    }else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    const kidneyID =req.query.kidneyID;

    if(kidneyID!=1 && kidneyID!=2){
        res.status(400).json({"msg" : "somethings up with your inputs"});
    }else{
        next();
    }
}

//using app.use for middleware.


//using middleware
app.get('/health-checkup',calculateRequest,userMiddleware,kidneyMiddleware,(req,res)=>{
    res.json({
        msg:"Your kidney is healthy"
    })
});

app.listen(3000,()=>{
    console.log("app is listening on 3000...");
})
