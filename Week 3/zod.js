const zod=require('zod');


function validateString(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

validateString({
    email:"kbjdhvhv@gmail.com",
    password:"jbdvjkdbvdvhb"
});
