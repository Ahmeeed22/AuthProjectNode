const bcrypt=require('bcrypt');
const { StatusCodes } = require("http-status-codes");
const jwt=require("jsonwebtoken");
const Post = require("../model/post.model");

// get all posts with user not blocked from admin
const getAllposts=async(req,res)=>{
            let status="active"
            let posts=await Post.find({status}).populate({
                path: 'userID',
                select: ['name', "email","status"]
            });
            let data=[]
            if(posts){
                 posts.map((item)=>{
                   if(item.userID.status=="active") {
                    data.push(item)
                   }
                })
                res.json({message:"success",data})

            }else{
                res.json({message:"failed"})
            }

}

// add post
const addPost=async (req,res)=>{
       let {title,content,userID}=req.body; 
        try{
            
                let newPost=new Post({title,content,userID});
                let post=await newPost.save();
                res.status(StatusCodes.CREATED).json({message:"success",post})

        }catch(errors){
            res.status(StatusCodes.BAD_REQUEST).json({message:"faild",errors})
        }
   
}

//get user Posts
const getPost=async(req,res)=>{
    const id=req.params.userID;
    try{
      let posts=  await Post.find({userID: id}).populate({
        path: 'userID',
        select: ['name', "email"]
    });
        res.json({message:"success",posts})

    }catch(err){
        res.json({message:"faild",err})
    }
}
// delete 
const deletePost=async(req,res)=>{
    const {id}=req.params
    try{
       let data=await Post.deleteOne({_id:id})
        res.json({message:"success",data})

    }catch(err){
        res.json({message:"faild" ,err})
    }
}
// update post by thier owner
const updateUserPost=async(req,res)=>{
    let {id}=req.params;
    let {title,content}=req.body
    try{
      let post=  await Post.updateOne({_id:id},{title:title,content})
        res.json({message:"success",post})
    }catch(err){
        res.json({message:"faild",err})
    }
}
// block post by admin 
const blockPost= async(req,res)=>{
    let {id}=req.params;
    try{
      let post=await  Post.updateOne({_id:id},{status:"deactive"});
      res.json({message:"Update success",post});
    }catch(err){
        res.json({message:"faild",err})
    }
}


module.exports={getAllposts,updateUserPost,deletePost,addPost,getPost,blockPost}