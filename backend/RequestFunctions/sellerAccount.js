const seller = require('../Schema/SellerSchema');

exports.sellersignup = ((req,res)=>{
    console.log("sign is running")

    seller.findOne({emailid : req.body.emailid}  , async function (err , data){

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

                const {userid , firstname , lastname ,  emailid, password,pickupaddress, city, state, pincode,bankname,accountnumber,ifsc,accountholdername,aadhar, pancard, contactnumber} = req.body;

                const sellers = new seller({userid , firstname , lastname , emailid, password,pickupaddress, city, state, pincode,bankname,accountnumber,ifsc,accountholdername,aadhar,pancard, contactnumber});

                sellers.save((err , data)=>{
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
})

exports.sellerlogin = ((req,res)=>{

    seller.findOne({emailid : req.body.emailid , password : req.body.password}).exec().then(async (data)=>{

        if(data)
        {            
                
            return res.status(200).json({messege : "SUCCESS", detail : data});

        }
        else
        {
            return res.status(400).json({messege : "your Emialid is incorrect or maybe you are not registered"})
        }

    }).catch((error)=>{
        res.status(400).json({messege : `${error}`})
    })

})