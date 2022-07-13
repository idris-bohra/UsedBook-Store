import {React , useState} from 'react';
import { Link } from "react-router-dom";
import '../../Component/Css/Myprofile.css'
import {useSelector , useDispatch} from "react-redux";
import img from '../../images/the helping book.png'

export default function Myprofile() {

    const mystate = useSelector((state) => state.loginreducer);
    const [obj, setobj] = useState({...mystate.detail.data})
    console.log("object = ",obj)

  return (

    
    <>

        <div class="d-flex" >
            <div className='p-5'>
                <br/>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/changeaccountdetails"><i class='fas fa-arrow-alt-circle-right'></i> Change Account details</Link>
                </div>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/sellbooks"><i class='fas fa-arrow-alt-circle-right'></i> SELL Books</Link>
                </div>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/requestedbooks"><i class='fas fa-arrow-alt-circle-right'></i> Requested Books</Link>
                </div>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/orderdetails"><i class='fas fa-arrow-alt-circle-right'></i> Order details</Link>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>

            

            <div className='my-5 mx-5 shadow-lg p-3 mb-5 bg-body' style={{width : "100%" , height : "100%"}} >
                <h1 className='d-flex flex-column justify-content-center align-items-center mx-5'>User Profile</h1>
                <div className='mx-5 my-4'>
                    <h4>Name : </h4>
                    <a className='boxes' >{obj.firstname}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>LastName : </h4>
                    <a className='boxes' >{obj.lastname}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Username : </h4>
                    <a className='boxes' >{obj.username}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Email-ID : </h4>
                    <a className='boxes' >{obj.emailid}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Gender : </h4>
                    <a className='boxes' >{obj.gender}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Contact Number: </h4>
                    <a className='boxes' >{obj.contactnumber}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Address : </h4>
                    <br/>
                    <div style={{'border' : "1px solid grey" , borderRadius : "10px"}} className='my-2 p-3'>
                        <a className='boxes my-4' >{obj.address}</a>
                        <br/>
                        <br/>
                        <a className='boxes my-4' >{obj.city}</a>
                        <br/>
                        <br/>
                        <a className='boxes my-4' >{obj.state}</a>
                        <br/>
                        <br/>
                        <a className='boxes my-4' >{obj.pincode}</a>
                    </div>

                </div>
                
                

                
            </div>
        </div>




    </>
  )
}
