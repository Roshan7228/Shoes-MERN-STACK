const Usermodel = require("../Model/User.model");
const CreateOTPandToken = require("../Utils/OtpandToken");


let Usercontroller={
    Signup:async(request,response)=>{
        let {Username,Email,ConfirmPassword,Password,Phonenumber}=request.body;
        if(!(Username,Email,ConfirmPassword,Password,Phonenumber)){
            return response.status(400).json({
                message:"Please Fill The All Feilds!"
            })
        }
        if(ConfirmPassword!==Password){
            return response.status(400).json({
                message:"Confirmpassword and Password does not Metch!"
            })
        }
        try {
            let isExits=await Usermodel.findOne({Email});
            if(isExits){
                return response.status(400).json({
                    message:"All Ready Register."
                })
            }
           let {OTP,token}= CreateOTPandToken(request.body,"5m");

           
             

            
        } catch (error) {
            return response.status(400).json({
                message:error.message
            })
        }
    }
}

module.exports=Usercontroller