let express=require("express");
let Usercontroller=require("../Controller/User.controller");
let Userroutes=express.Router();


Userroutes.post("/Signup",Usercontroller.Signup);


module.exports=Userroutes