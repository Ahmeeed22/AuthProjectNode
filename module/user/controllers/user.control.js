const User = require("../model/user.model")
const bcrypt=require('bcrypt');
const { StatusCodes } = require("http-status-codes");
const jwt=require("jsonwebtoken")
const crypto = require ("crypto");


const getAllUsers=async(req,res)=>{
            let users=await User.find({}).select("-password").select("-age").select("-verified");
            res.json({message:"success",data:users})
}

const signUp=async (req,res)=>{
       let {name,email,password,phone,location,role,status}=req.body;
        try{
            const user=   await User.findOne({email});
            if (user) res.status(StatusCodes.BAD_REQUEST).json({message:"email is already exist"})
            else{
                
                let newUser=new User({name,email,password,phone,location,role,status});
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
//get one user
const getUser=async(req,res)=>{
    const id=req.params.id;
    try{
      let user=  await User.findOne({ _id : id});
        res.json({message:"success",user})

    }catch(err){
        res.json({message:"faild",err})
    }
}
// delete 
const deleteUser=async(req,res)=>{
    const {id}=req.params
    try{
       let data=await User.deleteOne({_id:id})
        res.json({message:"success",data})

    }catch(err){
        res.json({message:"faild" ,err})
    }
}
// update
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
module.exports={getAllUsers,signUp,getUser,deleteUser,updateUser,signIn}