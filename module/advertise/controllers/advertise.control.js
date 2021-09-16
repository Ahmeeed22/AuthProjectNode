const { StatusCodes } = require("http-status-codes");
const Advertise = require("../model/advertise.model");

// get all Advertise
const getAllAdvertise=async(req,res)=>{
            
        try{
            let advirtises=await Advertise.find({})
           
                res.status(StatusCodes.OK).json({message:"success",advirtises})
            }catch(err){
                res.status(StatusCodes.BAD_REQUEST).json({message:failes})
            }
}

// add Advertise
const addAdvertise=async (req,res)=>{
       
        let {title,desc,userID}=req.body; 
        try{
            
                let newAdvertise=new Advertise({title,desc,userID});
                let adver=await newAdvertise.save();
                res.status(StatusCodes.CREATED).json({message:"success",adver})

        }catch(errors){
            res.status(StatusCodes.BAD_REQUEST).json({message:"faild",errors})
        }
}


// delete 
const deleteAdvertse=async(req,res)=>{
    const {id}=req.params
    try{
       let data=await Advertise.deleteOne({_id:id})
        res.json({message:"success",data})

    }catch(err){
        res.json({message:"faild" ,err})
    }
}
// update
const updateAdvertise=async(req,res)=>{
    let {id}=req.params;
    let {title,desc}=req.body
    try{
      let data=  await Advertise.updateOne({_id:id},{title,desc})
        res.json({message:"success",data})
    }catch(err){
        res.json({message:"faild",err})
    }
}
module.exports={getAllAdvertise,addAdvertise,updateAdvertise,deleteAdvertse}