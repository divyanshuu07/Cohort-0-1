const express=require('express');
const jwt=require('jsonwebtoken');
const jwtPassword="123456";

const app=express();

app.use(express.json());

const ALL_USERS=[
    {
        username:"divyanshu@gmail.com",
        password:"123",
        name:"Divyanshu Singh"
    },
    {
        username:"raman@gmail.com",
        password:"123",
        name:"Raman Singh"
    },
    {
        username:"priya@gmail.com",
        password:"123",
        name:"Priya Singh"
    }
];

function userExists(username,password){
    let userExists=false;

    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExists=true;
        }
    }

    return userExists;
}

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doenst exist in our memory"
        });
    }

    var token=jwt.sign({username: username},jwtPassword);
    return res.json({
        token
    });
});

app.get('/users',(req,res)=>{
    const token=req.headers.authorization;
    const decoded=jwt.verify(token,jwtPassword);
    const username=decoded.username;
    res.json({
        user:ALL_USERS
    })

})
app.listen(3000,()=>{
    console.log(`Server is  running on 3000...`);
})
