// import React from 'react'
// import axios from 'axios'
// import {useState} from 'react'
// import { useHistory } from "react-router-dom";
// import {signupaction , otpaction} from '../actions/action'
// import {useSelector , useDispatch} from "react-redux";



// export default function Signup() {

//     const history = useHistory();

//     // REACT-REDUX
//     const dispatch = useDispatch();

//     const [otpobj, setotpobj] = useState({emailid : '', contanctnumber: ''})

//     const [user, setuser] = useState({
//         firstname : '',
//         lastname : '',
//         username : '',
//         emailid : '',
//         password : '',
//         address : '',
//         city : '',
//         state : '',
//         pincode : '',
//         contactnumber : ''
//     })


//     let name1 , value1;

//     const handelInputs = (e)=>{

//         name1 = e.target.name;
//         value1 = e.target.value;
//         setuser({...user ,  [name1] : value1 });
//     }



//     const submitted = async(e)=>{

//         e.preventDefault();
//         console.log("here")
//         console.log("submitted users = ",user)
//         const {emailid ,contactnumber } = user;
//         setotpobj({emailid : `${emailid}`, contanctnumber: `${contactnumber}`})
//         console.log(emailid,contactnumber)

//         dispatch(signupaction(user))
        
//         const res = axios.post('http://localhost:8000/authenticate' ,{emailid, contactnumber})  
//         console.log(res)

//         // const res = await fetch('http://localhost:8000/authenticate' , {
//         //         method : "POST",
//         //         headers : {
//         //             "Content-Type" : "application/json"
//         //         },
//         //         body : JSON.stringify({emailid , contactnumber})   
//         //     });

//         // const data = res.json()
//         console.log("res = ",res)

//         // dispatch(otpaction(data))

//         // if(res.status === 200)
//         // {
//         //     history.push('/authentication')
//         // }
//         // else
//         // {
//         //     history.push('/signup')
//         // }

        

//     }

//   return (
//     <div>
//         <h1 className="d-flex flex-column justify-content-center align-items-center mx-5 my-5">SIGN-UP FORM</h1>

//         <form className='d-flex flex-column justify-content-center  mx-5' style={{"border" : "1px solid black" , padding :"20px"}}>
//         <div className="mb-3" >
//             <label htmlFor="firstname" className="form-label">First Name</label>
//             <input type="text" className="form-control" id="firstname" name='firstname' onChange={handelInputs}  aria-describedby="emailHelp" autoComplete='off'/>
//         </div>
//         <div className="mb-3 " >
//             <label htmlFor="lastname" className="form-label">Last Name</label>
//             <input type="text" className="form-control" id="lastname" name='lastname' onChange={handelInputs} aria-describedby="emailHelp" autoComplete='off'/>
  
//         </div>
//         <div className="mb-3 " >
//             <label htmlFor="username" className="form-label">User-Name</label>
//             <input type="text" className="form-control" id="username" name='username' onChange={handelInputs} aria-describedby="emailHelp" autoComplete='off'/>
  
//         </div>
//         <div className="mb-3 my-3" >

//             <label htmlFor="username" className="form-label">Select Gender</label>
//             <div class="form-check">
//             <input class="form-check-input" onChange={handelInputs}  type="radio" name="gender" id="gender" value="male" />
//             <label class="form-check-label" for="gender">
//                 Male
//             </label>
//             </div>
//             <div class="form-check">
//             <input class="form-check-input" onChange={handelInputs}  type="radio" name="gender" id="gender" value="female"/>
//             <label class="form-check-label" for="gender">
//                 Female
//             </label>
//             </div>
//             <div class="form-check">
//             <input class="form-check-input" onChange={handelInputs}  type="radio" name="gender" id="gender" value="other" />
//             <label class="form-check-label" for="gender">
//                 Other
//             </label>
//             </div>
//         </div>
//         <div className="mb-3 my-3" >
//             <label htmlFor="emailid" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="emailid" name='emailid' onChange={handelInputs} aria-describedby="emailHelp" autoComplete='off'/>
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" onChange={handelInputs} name='password' autoComplete='off'/>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="address" className="form-label">Address</label>
//             <input type="text" className="form-control" id="address" onChange={handelInputs} name='address' autoComplete='off'/>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="city" className="form-label">City</label>
//             <input type="text" className="form-control" id="city" onChange={handelInputs} name='city' autoComplete='off'/>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="state" className="form-label">State</label>
//             <input type="text" className="form-control" id="state" onChange={handelInputs} name='state' autoComplete='off'/>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="pincode" className="form-label">Pincode</label>
//             <input type="text" className="form-control" id="pincode" onChange={handelInputs} name='pincode' autoComplete='off'/>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="contactnumber" className="form-label">Contact Number</label>
//             <input type="text" className="form-control" id="contactnumber" onChange={handelInputs} name='contactnumber' autoComplete='off'/>
//         </div>
    
//         <button type="submit" className="btn btn-primary" onClick={submitted}>Submit</button>
//         </form>
//     </div>
//   )
// }

