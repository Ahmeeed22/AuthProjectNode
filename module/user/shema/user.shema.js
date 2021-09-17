 const mongoose = require('mongoose');
const bcrypt=require("bcrypt");

const crypto = require ("crypto");

 const Schema = mongoose.Schema;

 const userShema = new Schema({
  
  name: {type:String,default:"ali"},
  email: {type:String},
  password: {type:String},
  phone:{type:String},
  location: { type: String },
  role :{type:String,default:"user",enum: ["user", "admin"]},
  status:{type:String,default:"active",enum:["active","deactive"]}
 

},{
  timestamps:true,
});

// hash password in hocks  and encrypt phone number
userShema.pre('save',async function(next) {

  const algorithm = "aes-256-cbc"; 
  // generate 16 bytes of random data
  const initVector = crypto.randomBytes(16);
  
  // protected data
  const message = this.phone;
  
  // secret key generate 32 bytes of random data
  const Securitykey = crypto.randomBytes(32);
  
  // the cipher function
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  
  // encrypt the message
  // input encoding
  // output encoding
  let encryptedData = cipher.update(message, "utf-8", "hex");
  
  encryptedData += cipher.final("hex");
  this.phone=encryptedData
  console.log("Encrypted message: " + encryptedData);
  
  // the decipher function
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  
  let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
  
  decryptedData += decipher.final("utf8");
  
  console.log("Decrypted message: " + decryptedData);
  console.log("before"+this.password +"   ******   "+this.phone)
  // console.log(this)
  this.password=await bcrypt.hash(this.password,7)
  console.log("after"+this.password)
  next();
});


module.exports=userShema;