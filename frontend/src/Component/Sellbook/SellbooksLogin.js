import React from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import {useState,useRef,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {selleraction} from '../../actions/action';
import {useSelector , useDispatch} from "react-redux";

function SellbooksLogin() {

  const history = useHistory();

  // REACT-REDUX
  const dispatch = useDispatch();  

  
  // USE-REF
  const alert= useRef();

  useEffect(()=>{
    alert.current.style.display = "none";
  })


  let name1 , value1;
  const [user, setuser] = useState({

      emailid : '',
      password : '',
 
  })

  const handelInputs = (e)=>{

    name1 = e.target.name;
    value1 = e.target.value;
    setuser({...user ,  [name1] : value1 });
  }

  const submitted = async(e)=>{

    e.preventDefault();

    axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/sellerlogin`,  user, {headers : {"Content-Type" : "application/json" }}).then((result)=>{

      dispatch(selleraction(result.data));
      alert.current.style.display = "none"
      history.push("/sellerprofile");

    }).catch((err)=> {

      alert.current.style.display = "block"
      history.push("/sellerlogin");

    });  

    
}

  return (
    <>


      <div ref={alert} class="alert alert-danger" role="alert">
        <strong>ERROR!</strong> Please Fill proper details or try <Link style={{ color : "black"}} to="/sellbooks">SignUp</Link>
      </div>

      <h4 className="d-flex flex-column justify-content-center align-items-center mx-5 my-5">Please Login with Email-id and Password</h4>

      <form action='/log' method='POST' className='d-flex flex-column justify-content-center mx-5' style={{"border" :"1px solid black", padding :"20px"}}>
        <div className="mb-3 " >
          <label htmlFor="emailid" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailid" name='emailid' aria-describedby="emailHelp" onChange={handelInputs}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={handelInputs}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitted}>Submit</button>
      </form>

    </>
  )
}

export {SellbooksLogin}