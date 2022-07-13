import React from 'react'
import {useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";



export default function OTP() {

    const history = useHistory();

    const [userotpobj, setuserotpobj] = useState({emailotp :'', mobileotp : ''})

    const signupuser = useSelector(state => state.signupreducer)
    const otpobject = useSelector(state => state.otpreducer)
    console.log("signupuser = ",signupuser)
    console.log("otpobject = ",otpobject)

    function otpclick(e)
    {
        const name = e.target.name;
        const value = e.target.value;

        setuserotpobj({...userotpobj , [name] : value})

    }

    async function submitted()
    {
        console.log(userotpobj);

        if(otpobject.emailotp == userotpobj.emailotp && otpobject.mobileotp == userotpobj.mobileotp)
        {
            console.log("inside if")
            const res = await fetch(`http://localhost:${process.env.REACT_APP_SERVER}/signup` , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(signupuser)   
            });

            const data = await res.json();
            console.log("data = ",data );
            console.log("response = ",res);
    
    
            if(res.status === 500 || res.status === 400)
            {
                history.push("/signup");
            }
            else
            {
                history.push("/login");
            }
        }
        else
        {
            history.push("/authentication");   
        }
        
        
        
    }

  return (
    <>
        
        <h1 className="d-flex flex-column justify-content-center align-items-center mx-5 my-5">Authentication</h1>

        <form  style={{"border" : "2px solid black"}} className= "d-flex flex-column justify-content-center  mx-5 my-5">
            <div class="mb-3 my-5 mx-5">

                <label for="exampleFormControlInput1" class="form-label">Email OTP</label>
                <input type="text" name='emailotp' onChange={otpclick} class="form-control" id="emailotp" placeholder="Enter your Email OTP"/>
                </div>
                <div class="mb-3 mx-5">
                <label for="exampleFormControlTextarea1" class="form-label">Mobile OTP</label>
                <input type="text" onChange={otpclick} name='mobileotp' class="form-control" id="mobileotp" placeholder="Enter your Mobile OTP"/>

                <button type="button" onClick={submitted} class="btn btn-primary my-3">Submit</button>
            </div>
        </form>
    </>
  )
}
