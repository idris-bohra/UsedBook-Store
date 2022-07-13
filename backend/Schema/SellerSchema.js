const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const sellerSchema = new Schema({

    userid : {
        type : Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },
    firstname : {
        type : String,
        min : 2,
        max : 10,
        required:true
    },
    lastname : {
        type : String,
        min : 2,
        max : 10,
        required : true
    },
    emailid : {
        type : String,
        min : 10,
        max : 15,
        required : true

    },
    password : {
        type : String,
        required : true
    },
    pickupaddress : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    pincode : {
        type : Number,
        required :true
    },
    bankname : {
        type : String,
        required :true
    },
    accountnumber : {
        type : Number,
        required : true
    },
    ifsc : {
        type : String,
        required : true
    },
    accountholdername : {
        type : String,
        required  : true
    },
    aadhar:{
        type : Number,
        required : true
    },
    pancard : {
        type : String,
        required : true
    },
    contactnumber : {
        type : Number,
        required : true
    },
    role : {
        type : String,
        enum : ["seller"]
    }

    
}, {timestamps : true})


module.exports = (mongoose.model('seller' , sellerSchema));