const { StatusCodes } = require("http-status-codes");
const Report = require("../model/report.model");

// get all Report
const getAllReport=async(req,res)=>{
            
        try{
            let data=await Report.find({})
           
                res.status(StatusCodes.OK).json({message:"success",data})
            }catch(err){
                res.status(StatusCodes.BAD_REQUEST).json({message:failes})
            }
}

// add Report
const addReport=async (req,res)=>{
       
         let {comment,postID,userID}=req.body; 
        try{
            const report=   await Report.findOne({userID,postID });
            if (report) res.status(StatusCodes.BAD_REQUEST).json({message:"you can not report for same post more than one time"})
            else{
                
                let newreport=new Report({comment,postID,userID});
                let data=await newreport.save();
                res.status(StatusCodes.CREATED).json({message:"success",data})
            }
        
        }catch(errors){
            res.status(StatusCodes.BAD_REQUEST).json({message:"faild",errors})
        }
}


// delete 
const deleteReport=async(req,res)=>{
    const {id}=req.params
    try{
       let data=await Report.deleteOne({_id:id})
        res.json({message:"success",data})

    }catch(err){
        res.json({message:"faild" ,err})
    }
}

module.exports={deleteReport,addReport,getAllReport}