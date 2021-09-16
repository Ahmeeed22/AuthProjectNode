 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const advertiseShema = new Schema({
  
  title: {type:String},
  desc: {type:String},
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },


},{
  timestamps:true,
});

module.exports=advertiseShema;