const mongoose=require("mongoose");
const  reportShema= require("../shema/report.shema");

const Report=mongoose.model("report",reportShema)

module.exports=Report

