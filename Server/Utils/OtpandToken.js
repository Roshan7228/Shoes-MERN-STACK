const jwt = require('jsonwebtoken');
require("dotenv").config();
let CreateOTPandToken=(Userdata,OTPExpires)=>{
  
    let OTP=Math.floor(100000*Math.random()+900000);
    let token = jwt.sign({User:Userdata }, process.env.Signup_JWT_PRIVATEKEY,{expiresIn:OTPExpires});
    return {OTP,token};
}



module.exports=CreateOTPandToken;