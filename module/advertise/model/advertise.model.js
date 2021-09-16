const mongoose=require("mongoose");
const  advertiseShema= require("../shema/advertise.shema");

const Advertise=mongoose.model("advertise",advertiseShema)

module.exports=Advertise

