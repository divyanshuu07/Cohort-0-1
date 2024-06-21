//zod is basically a validation function

const express=require('express');
const zod=require('zod');
const app=express();


//basic zod schema taking array of numbers as input
const schema=zod.array(zod.number());

// {
//     email: string==>null
//     passowrd: atleast 8 letters
//     country: "IN","US"
// }

const schema1 =zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))

})

app.use(express.json());


app.post('/health-checkup',(req,res)=>{
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }else{
        res.send({
            response
        })
    }
})

app.listen(3000,()=>{
    console.log("app is listening to 3000");
})
