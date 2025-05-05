const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '../.env' });
const secret = process.env.JWT_SECRET

if (!secret) {
    console.error("JWT_SECRET is not defined in the environment variables.");
    process.exit(1); 
}
const tokenPayload = {
    id:'3dfghi4r76bj74fghoj32g45ef34tbf',
    email:'sample123@gamil.com',
    role:'user'
}
token = jwt.sign(tokenPayload,secret,{
    expiresIn:'1m',
})

console.log("Token ",token);

setTimeout(()=>{
    try{
        const decodedData = jwt.verify(token,secret);
        console.log("Token verified Successfully");
        console.log("decoded Data : ",decodedData);
        console.log("_____________________________________________");
    }catch(error){
        console.log('Error Occured ',error.message);
    }
},3000);

const decoded = jwt.decode(token);
console.log("________________________________________________________");
console.log("Decoded :",decoded);