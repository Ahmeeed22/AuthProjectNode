const User = require("../model/user.model")
const bcrypt=require('bcrypt');
const { StatusCodes } = require("http-status-codes");
const jwt=require("jsonwebtoken")
const crypto = require ("crypto");

// get all user and admin  BY SUPERADMIN
const getAllUsers=async(req,res)=>{
            let userData=[];
            let adminData=[];
            try{
                let users=await User.find().select("-password").select("-age");

                if(req.params.typeUser == "user"){
                    users.map((item)=>{
                      if(item.role=="user") {
                       userData.push(item)
                      }
                   })
                   res.status(StatusCodes.OK).json({message:"success",userData})
    
               }else if(req.params.typeUser == "admin"){
                users.map((item)=>{
                    if(item.role=="admin") {
                        adminData.push(item)
                    }
                 })
                 res.status(StatusCodes.OK).json({message:"success",adminData})
               }
            }catch(err){
                res.status(StatusCodes.BAD_REQUEST).json({message:"fail",err})
            }
           

            
}

// registeration
const signUp=async (req,res)=>{
       let {name,email,password,phone,location,status}=req.body;
      
        try{
            const user=   await User.findOne({email});
            if (user) res.status(StatusCodes.BAD_REQUEST).json({message:"email is already exist"})
            else{
                
                let newUser=new User({name,email,password,phone,location,status});
                let user=await newUser.save();
                res.status(StatusCodes.CREATED).json({message:"success",user})
            }
        
        }catch(errors){
            res.status(StatusCodes.BAD_REQUEST).json({message:"faild",errors})
        }
   
}
// sing in 
const signIn=async(req,res)=>{
    const {email,password}=req.body;

    try{
        let user=await User.findOne({email});
        if(!user){
            res.status(StatusCodes.BAD_REQUEST).json({message:"email not exist"})
        }
        else{
            const match =await bcrypt.compare(password,user.password);
           if(match){ 
            const token= jwt.sign({_id:user._id,role: user.role,name: user.name},"shhhhh")
            res.status(StatusCodes.OK).json({token:token})


            }else{ 
            res.status(StatusCodes.BAD_REQUEST).json({message:"password wrong"})

           }

        }

    }catch(err){

    }

}

// delete   admin or user by super admin
const deleteAdmin=async(req,res)=>{
    const {id}=req.params
    try{
       let data=await User.deleteOne({_id:id})
        res.json({message:"success",data})

    }catch(err){
        res.json({message:"faild" ,err})
    }
}
// update user profile
const updateUser=async(req,res)=>{
    let {id}=req.params;
    let {name,status,email,phone,password}=req.body
    try{
      let user=  await User.updateOne({_id:id},{name:name,status:status,email,phone:phone,password:password})
        res.json({message:"success",user})
    }catch(err){
        res.json({message:"faild",err})
    }
}
// add admin by super admin only
const addAdmin=async (req,res)=>{
    let {name,email,password,phone,location,status}=req.body;
   
     try{
         const user=   await User.findOne({email});
         if (user) res.status(StatusCodes.BAD_REQUEST).json({message:"email is already exist"})
         else{
             
             let newAdmin=new User({name,email,password,phone,location,status,role:"admin"});
             let admin=await newAdmin.save();
             res.status(StatusCodes.CREATED).json({message:"success",admin})
         }
     
     }catch(errors){
         res.status(StatusCodes.BAD_REQUEST).json({message:"faild",errors})
     }

}
// block user 
// block post by admin 
const blockUser= async(req,res)=>{
    let {id}=req.params;
    try{
      let user=await  User.updateOne({_id:id},{status:"deactive"});
      res.json({message:"Update success",user});
    }catch(err){
        res.json({message:"faild",err})
    }
}

module.exports={getAllUsers,signUp,deleteAdmin,updateUser,signIn,addAdmin,blockUser} 