const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;

const userSchema = new Schema({

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
    username : {
        type: String,
        unique : true,
        required : true

    },
    gender : {
        type : String,
        enum : ["male","female","other"]
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
    address : {
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
    contactnumber : {
        type : Number,
        required : true
    },
    role : {
        type : String,
        enum : ["admin" , "user"]
    }

    
}, {timestamps : true})

userSchema.methods.generateToken = async function (){

    console.log("generateTOken");
    try{
        const token = jwt.sign({_id : this._id.toString() }, '@#$*(U(*&(*jkkdfjw8909809dksjfklislkjdf&*^&***kjsddfgsdf54634fjasdlfkj');
        console.log("token = ",token);
        return token;
    }
    catch(err)
    {
        res.send("err = " , err)
    }
}   

// userSchema.pre('save' , async function(next){

//     console.log("this is pre method");
//     console.log(this)
//     if(this.isModified('password'))
//     {
//         this.password = await bcrypt.hash(this.password, 12);
//         console.log("password = ",this.password)
//     }
//     next();

// })



module.exports = (mongoose.model('USER' , userSchema));