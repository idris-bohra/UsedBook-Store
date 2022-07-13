const { Auth, LoginCredentials } = require("two-step-auth");
var springedge = require('springedge');

exports.otpvalidator = (req, res)=>{

    console.log(req.body.emailid);
    console.log(req.body.contactnumber);

    const Number = req.body.contactnumber;
    const emailId = req.body.emailid;

    async function validate(emailId ,Number ) {
        try
        {
            const resi = await Auth(emailId, "UsedBookStore");

            if(resi)
            {

                console.log("resi" , resi);
                console.log("resi.mail = ",resi.mail);
                console.log("resi.OTP = ",resi.OTP);
                otp = resi.OTP;
                console.log("resi.success = ",resi.success);

            }
            else
            {
                res.status(400).json({error : "some error has occured"})
            }


            var params = {
                'apikey': '6ojfpx3g160a1vv2279dtl3m42x9qekd', // API Key
                'sender': 'SEDEMO', // Sender Name
                'to': [
                    `${Number}`  //Moblie Number
                ],
                'message': 'Hello, This is a test message from spring edge',
                'format': 'json'
                };
                
                springedge.messages.send(params, 5000, function (err, response) {
                if (err) {
                    return res.status(400).json({error : err});
                }
                console.log("response = ",response)
                return res.status(200).json({ mobileotp : 12345 , emailotp : resi.OTP})
                });
        }
        catch(err)
        {
            return res.status(400).json({error : err});           
        }  
    }

    validate(emailId,Number);

}