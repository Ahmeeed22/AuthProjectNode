 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const postShema = new Schema({
  
  title: {type:String},
  content: {type:String},
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },


},{
  timestamps:true,
});

module.exports=postShema;