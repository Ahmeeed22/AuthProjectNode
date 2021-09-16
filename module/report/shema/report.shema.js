 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const advertiseShema = new Schema({
  
 
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  postID: { type: mongoose.Schema.Types.ObjectId, ref: 'post' },
  comment: {type:String},


},{
  timestamps:true,
});

module.exports=advertiseShema;