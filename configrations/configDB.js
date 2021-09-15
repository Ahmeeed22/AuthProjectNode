const mongoose=require("mongoose");
// let dbConn='mongodb://localhost:27017/my_database1'
let dbconnection=process.env.DATABACE_CONN;
const connection=()=>mongoose.connect(dbconnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 
}).then((result)=>console.log("connection success")).catch((err)=> console.log(err));

module.exports=connection;