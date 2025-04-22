let mongoose=require("mongoose");

let UserSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    Profilepicture:{
        type:String,
        default:"https://cdn.vectorstock.com/i/500p/64/20/beautiful-admin-roles-line-icon-vector-28576420.jpg"
    },
    Phonenumber:{
        type:Number,
        required:true
    }
})


let Usermodel=mongoose.model("User",UserSchema);

module.exports=Usermodel