import React from 'react'
import {useRef , useEffect , useState} from 'react'
import { Link } from "react-router-dom";
import '../../Component/Css/SellerProfile.css'

import { useSelector , useDispatch} from 'react-redux';

export default function SellerProfile() {

    // REACT-REDUX
    const sellerstate = useSelector((state)=> state.sellerreducer);
    console.log("sellerstate = ",sellerstate)
    const [obj, setobj] = useState({...sellerstate.detail})
    const dispatch = useDispatch();

  return (
    <>

        <div class="d-flex" >
            <div className='p-5'>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/seller/changeselleraccountdetails"> <i class='fas fa-arrow-alt-circle-right'></i>Change Account details</Link>
                </div>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/seller/addbooks"> <i class='fas fa-arrow-alt-circle-right'></i> Add More Books</Link>
                </div>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/seller/unsoldbooks"> <i class='fas fa-arrow-alt-circle-right'></i> Unsold Products</Link>
                </div>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/seller/sellhistory"> <i class='fas fa-arrow-alt-circle-right'></i> Seller History</Link>
                </div>
                <br/>
                <br/>
                <div className='div2'>
                    <Link className='change' to="/seller/pendingbooks"> <i class='fas fa-arrow-alt-circle-right'></i> Pending Books</Link>
                </div>
            </div>

            

           {/* <div className='my-5 mx-5 card shadow-lg p-3 mb-5 bg-body' style={{width : "100%" , height : "100px"}} >
                <h1 className='d-flex flex-column justify-content-center align-items-center'>Seller Profile</h1>
                <div className='mx-5 my-3'>
                    <h4>Name : </h4>
                    <a className='boxes' >{obj.firstname}</a>
                </div>
                <div className='mx-5 my-3'>
                    <h4>LastName : </h4>
                    <a className='boxes' >{obj.lastname}</a>
                </div>
                <div className='mx-5 my-3'>
                    <h4>Email-ID : </h4>
                    <a className='boxes' >{obj.emailid}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Contact Number: </h4>
                    <a className='boxes' >{obj.contactnumber}</a>
                </div>
                <div className='mx-5 my-3'>
                    <h4>Address : </h4>
                    <br/>
                    <div style={{'border' : "1px solid grey" , borderRadius : "10px"}} className='my-2 p-3'>
                        <h5 for="exampleInputPassword1" class="form-label">PickUp Address</h5>
                        <a className='boxes my-3' >{obj.pickupaddress}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">City</h5>
                        <a className='boxes my-3' >{obj.city}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">State</h5>
                        <a className='boxes my-3' >{obj.state}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">Pincode</h5>
                        <a className='boxes my-3' >{obj.pincode}</a>
                    </div>

                </div>                
                <div className='mx-5 my-3'>
                    <h4>Bank Details : </h4>
                    <br/>
                    <div style={{'border' : "1px solid grey" , borderRadius : "10px"}} className='my-2 p-3'>
                        <h5 for="exampleInputPassword1" class="form-label">Bank-Name</h5>
                        <a className='boxes my-3' >{obj.bankname}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">Account Number</h5>
                        <a className='boxes my-3' >{obj.accountnumber}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">IFSC</h5>
                        <a className='boxes my-3' >{obj.ifsc}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">Account Holder Name</h5>
                        <a className='boxes my-3' >{obj.accountholdername}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">Contanct Number</h5>
                        <a className='boxes my-3' >{obj.contactnumber}</a>
                    </div>

                </div>                
                <div className='mx-5 my-3'>
                    <h4>Authentication : </h4>
                    <br/>
                    <div style={{'border' : "1px solid grey" , borderRadius : "10px"}} className='my-2 p-3'>
                        <h5 for="exampleInputPassword1" class="form-label">Aadhaar Number</h5>
                        <a className='boxes my-3' >{obj.aadhar}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">PAN Number</h5>
                        <a className='boxes my-3' >{obj.pancard}</a>
                        <br/>
                        <br/>
                    </div>

                </div>                
            </div>  */}

            <div className='my-5 mx-5 shadow-lg p-3 mb-5 bg-body' style={{width : "100%" , height : "100%"}} >
                <h1 className='d-flex flex-column justify-content-center align-items-center mx-5'>Seller Profile</h1>
                <div className='mx-5 my-4'>
                    <h4>Name : </h4>
                    <a className='boxes' >{obj.firstname}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>LastName : </h4>
                    <a className='boxes' >{obj.lastname}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Email-ID : </h4>
                    <a className='boxes' >{obj.emailid}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Contact Number: </h4>
                    <a className='boxes' >{obj.contactnumber}</a>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Address : </h4>
                    <br/>
                    <div style={{'border' : "1px solid grey" , borderRadius : "10px"}} className='my-2 p-3'>
                        <h5 for="exampleInputPassword1" class="form-label">PickUp Address</h5>
                        <a className='boxes my-3' >{obj.pickupaddress}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">City</h5>
                        <a className='boxes my-3' >{obj.city}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">State</h5>
                        <a className='boxes my-3' >{obj.state}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">Pincode</h5>
                        <a className='boxes my-3' >{obj.pincode}</a>
                    </div>

                </div>
                <div className='mx-5 my-4'>
                    <h4>Bank Details : </h4>
                    <br/>
                    <div style={{'border' : "1px solid grey" , borderRadius : "10px"}} className='my-2 p-3'>
                        <h5 for="exampleInputPassword1" class="form-label">Bank-Name</h5>
                        <a className='boxes my-3' >{obj.bankname}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">Account Number</h5>
                        <a className='boxes my-3' >{obj.accountnumber}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">IFSC</h5>
                        <a className='boxes my-3' >{obj.ifsc}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">Account Holder Name</h5>
                        <a className='boxes my-3' >{obj.accountholdername}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">Contanct Number</h5>
                        <a className='boxes my-3' >{obj.contactnumber}</a>
                    </div>
                </div>
                <div className='mx-5 my-4'>
                    <h4>Authentication : </h4>
                    <br/>
                    <div style={{'border' : "1px solid grey" , borderRadius : "10px"}} className='my-2 p-3'>
                        <h5 for="exampleInputPassword1" class="form-label">Aadhaar Number</h5>
                        <a className='boxes my-3' >{obj.aadhar}</a>
                        <br/>
                        <br/>
                        <h5 for="exampleInputPassword1" class="form-label">PAN Number</h5>
                        <a className='boxes my-3' >{obj.pancard}</a>
                        <br/>
                        <br/>
                    </div>
                </div>
                
                

                
            </div>

        </div>
    </>
  )
}
