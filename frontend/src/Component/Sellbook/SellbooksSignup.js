import React from 'react'
import {useState,useRef,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";



export default function SellbooksSignup() {

    const history = useHistory();

    //USE_REF
    const alert= useRef();

    // REACT-REDUX
    const dispatch = useDispatch();
    const mystate = useSelector((state) => state.loginreducer);


    useEffect(()=>{
        alert.current.style.display = "none";
    })

    const [selleruser, setselleruser] = useState({
        userid : `${mystate.detail.data._id}`,
        firstname : '',
        lastname : '' ,
        emailid : '',
        password : '',
        pickupaddress :'',
        city : '',
        state : '',
        pincode : '',
        bankname : '',
        accountnumber : '',
        ifsc : '',
        accountholdername : '',
        aadhar : '',
        pancard : '',
        contactnumber : ''
    })


    let name1 , value1;

    const handelInputs = (e)=>{

        name1 = e.target.name;
        value1 = e.target.value;
        setselleruser({...selleruser ,  [name1] : value1 });
    }



    const submitted = async(e)=>{

        e.preventDefault();
        
        console.log("submitted sellerusers = ",selleruser)
        // dispatch(signupaction(user))
        
        const res = await fetch(`http://localhost:${process.env.REACT_APP_SERVER}/sellersignup` , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                ...selleruser
            })
        });
        
        const data = await res.json();

        // dispatch(otpaction(data))

        if(res.status === 200)
        {
            history.push('/sellerlogin')
        }
        else
        {
            alert.current.style.display = "block"
        }

        

    }

  return (
    <div>
        <div ref={alert} class="alert alert-danger" role="alert">
            <strong>ERROR!</strong> Please Fill proper details or try <Link style={{ color : "black"}} to="/sellerlogin">login</Link>
        </div>

        <h1 className="d-flex flex-column justify-content-center align-items-center mx-5 my-5">SELLER SIGN-UP FORM </h1>

        
        
        <form className='d-flex flex-column justify-content-center  mx-5' style={{"border" : "1px solid black" , padding :"20px"}}>
        <h3 className=" my-3">IF already a SELLER go <Link style={{"display" : "inline"}} to="/sellerlogin">login</Link></h3>
        <div className="mb-3 my-5">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstname" name='firstname' onChange={handelInputs}  aria-describedby="emailHelp" autoComplete='off'/>
        </div>
        <div className="mb-3 " >
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastname" name='lastname' onChange={handelInputs} aria-describedby="emailHelp" autoComplete='off'/>
  
        </div>
        <div className="mb-3 my-3" >
            <label htmlFor="emailid" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailid" name='emailid' onChange={handelInputs} aria-describedby="emailHelp" autoComplete='off'/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={handelInputs} name='password' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="pickupaddress" className="form-label">Pickup-Address</label>
            <input type="text" className="form-control" id="pickupaddress" onChange={handelInputs} name='pickupaddress' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" onChange={handelInputs} name='city' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <input type="text" className="form-control" id="state" onChange={handelInputs} name='state' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="pincode" className="form-label">Pincode</label>
            <input type="text" className="form-control" id="pincode" onChange={handelInputs} name='pincode' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="bankname" className="form-label">BankName</label>
            <input type="text" className="form-control" id="bankname" onChange={handelInputs} name='bankname' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="accountnumber" className="form-label">Bank Account Number</label>
            <input type="text" className="form-control" id="accountnumber" onChange={handelInputs} name='accountnumber' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="ifsc" className="form-label">Bank IFSC</label>
            <input type="text" className="form-control" id="ifsc" onChange={handelInputs} name='ifsc' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="accountholdername" className="form-label">Account Holder Name</label>
            <input type="text" className="form-control" id="accountholdername" onChange={handelInputs} name='accountholdername' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="aadhar" className="form-label">Enter your Adhaar</label>
            <input type="text" className="form-control" id="aadhar" onChange={handelInputs} name='aadhar' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="pancard" className="form-label">Enter your PAN Card</label>
            <input type="text" className="form-control" id="pancard" onChange={handelInputs} name='pancard' autoComplete='off'/>
        </div>
        <div className="mb-3">
            <label htmlFor="contactnumber" className="form-label">Contact Number</label>
            <input type="text" className="form-control" id="contactnumber" onChange={handelInputs} name='contactnumber' autoComplete='off'/>
        </div>
    
        <button type="submit" className="btn btn-primary" onClick={submitted}>Submit</button>
        </form>
    </div>
  )
}

