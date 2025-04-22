let express=require("express");
let cors=require("cors");
const Connections = require("./Config/db");
const Userroutes = require("./Routes/User.routes");
require("dotenv").config();


let app=express(); 
app.use(express.json());
app.use(cors());


app.use("/api/user",Userroutes);


app.listen(process.env.PORT || 5000,async ()=>{
    try {
         await Connections
         console.log(`Server Running on Port ${process.env.PORT||500}`);
    } catch (error) {
         console.log(error);
    }
})




