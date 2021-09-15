const mongoose=require("mongoose");
const userShema = require("../shema/user.shema");
const User=mongoose.model("user",userShema)

module.exports=User
