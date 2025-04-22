let mongoose=require("mongoose");
require("dotenv").config();

let Connections=mongoose.connect(process.env.Mongoose_DB_URL);

module.exports=Connections