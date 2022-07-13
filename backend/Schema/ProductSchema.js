const { ObjectID } = require('bson');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = new Schema({

   name : {
       type : String,
       // required : true
   },
   price : {
       type : Number,
    //    required : true
   },
   author : {
       type:String,
    //    required : true
   },
   description : {
       type : String,
    //    required : true,       
   },
   userId : {
       type : ObjectID,
       ref: 'users',
    //    required : true
   },
   sellerId : {
       type : ObjectID,
       ref : 'sellers',
    //    required : true
   },
   productImg : [
        {img : {type : Object , required : true}},
       
    ],
    count : {
        type : Number,
        default : 1,
        // required : true
    },
   category : {
        type : String,
        ref : 'Category',
        // required:true
   }

    
}, {timestamps : true});

module.exports = (mongoose.model('Product' , ProductSchema));