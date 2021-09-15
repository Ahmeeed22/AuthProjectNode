const mongoose=require("mongoose");
const postShema = require("../shema/post.shema");

const Post=mongoose.model("post",postShema)

module.exports=Post

