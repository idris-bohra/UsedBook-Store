const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CategorySchema = new Schema({

   name : {

       type : String,
       unique : true,
   },
   slug : {
       type : String,
       unique : true
   }

    
}, {timestamps : true});

module.exports = (mongoose.model('Category' , CategorySchema));