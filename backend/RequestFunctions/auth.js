const Users = require('../Schema/UserSchema');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const generateToken = (_id)=>{

    try
    {
        const token = jwt.sign({_id : _id}, process.env.JWT_SECRET , { 
            expiresIn: '1h' // expires in 24 hours
        });
        return token;
    }
    catch(err)
    {
        return null;
    }
}

exports.signup = (req , res)=>{

    console.log("sign is running")

    Users.findOne({emailid : req.body.emailid}  , async function (err , data){

        if(err)
        {
            res.status(400).json({err : `${err}`})
        }
        else
        {
            if(data)
            {
                return res.status(400).json({messege : "email alredy exist"});

            }
            else
            {

                const hash_password = await bcrypt.hash(req.body.password, 10);
                req.body.password = hash_password;
                console.log("hash_password", hash_password);
                const {firstname , lastname , username , gender, emailid, password, address, city, state, pincode, contactnumber} = req.body;
                const users = new Users({firstname , lastname , username , gender, emailid, password,  address, city, state, pincode, contactnumber});

                users.save((err , data)=>{
                    if(err)
                    {
                        return res.status(400).json({messege : `${err}`});
                    }
                    else
                    {
                        return res.status(200).json(req.body);
                    }
                })
            }
        }

    })

}
  
exports.login = (req, res) => {
    
    Users.findOne({emailid : req.body.emailid}).exec().then(async (data)=>{

        if(data)
        {
            let object = {};
            if(await bcrypt.compare(req.body.password, data.password))
            {

                const token = await generateToken(data._id); // We had created the generateToken function for User Schema go check it out in UserSchema in Schema directory and sending token and object as a response.(we changed it to a normal function because of some error)
                
                if(token)
                {
                    object.token = token;
                    object.data = data;
                    return res.status(200).json({messege : "SUCCESS", detail : object});
                }
                else
                {
                    res.status(400).json({Error : "some error found"})
                }
                
                
            }
            else
            {
                return res.status(400).json({messege : "Please provide a valid email-id or password"})
            }
        }
        else
        {
            return res.status(400).json({messege : "your Emialid is incorrect or maybe you are not registered"})
        }

    }).catch((error)=>{
        res.status(400).json({messege : `${error}`})
    })
};