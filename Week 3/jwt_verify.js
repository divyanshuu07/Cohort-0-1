const jwt =require('jsonwebtoken');

//decode, verify, generate

const value={
    name:"Divyanshu Singh",
    accountNumber:123456
}

//jwt
const token=jwt.sign(value,"secret");

//this token has been generated using this secret, and hence thish token can only be verified using this seccret

const verifiedValue=jwt.verify("token","secret"); //only the BE can verify this using the secret

console.log(verifiedValue);
