import React from 'react'
import {useEffect,useState,useRef} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom"
import axios from 'axios'



export default function BigCard() {

    const mycard = useSelector((state)=>state.bigcardreducer);
    const mystate = useSelector((state)=> state.loginreducer);
    const location = useLocation();
    const history = useHistory();
    var obj = {}

    console.log("mystate in bigcard=",mycard)

    if(mystate !== null)
    {
        obj ={...mystate.detail.data}
    }
    // console.log("mycard = ",mycard)
    // console.log(location.pathname)

    function addbook()
    {
        if(mystate == null)
        {
            history.push('/login')
        }
        else
        {
            axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/user/cart/addtocart`, {userid : `${mystate.detail.data._id}`, productid : `${mycard.id}`}).then((idris)=>{

            console.log('added cart = ',idris)   

            
            }).catch((err)=>{

                console.log("found an error on card = ",err)

            })
            history.push('/mycart')
        }
    }

    function buynow(productId)
    {
        if(mystate == null)
        {
            history.push('/login')
        }
        else
        {
            history.push(`/buynow/${mycard.id}`)
        }
    }


    
  return (
    <div className='d-flex justify-content-start' >

            
        <div>
            <div class="" >
                <img style={{"height" : "auto" , "width" : "350px"}} src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${mycard.productImg[0].img.filename}`} class="mx-2 my-3" alt="..."/>
            </div>
            <div class="" >
                <img style={{"height" : "auto","width" : "350px"}} src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${mycard.productImg[1].img.filename}`}
                class="mx-2 my-3" alt="..."/>
            </div>
            <div class="" >
                <img style={{"height" : "auto","width" : "350px"}} src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${mycard.productImg[2].img.filename}`} class="mx-2 my-3" alt="..."/>
            </div>
            
            <br/>
            <br/>
            <br/>
        </div>

        <div style={{"margin-left" : "10vh" , "margin-top" : "20vh"}} className=''>
            <div className=''>
                <h1 style={{"display" : "inline"}}>{mycard.name}</h1>
            </div>
            <div className=''> 
                <h5 style={{"display" : "inline" , "color" : "darkblue"}}>{mycard.author}</h5>
            </div>
            <div className='my-4'>
                <h1 style={{"display" : "inline"}}>&#8377;{mycard.price}</h1>
                <p style={{"color" : "green"}}>Special offer --- Flat 20% Off</p>
                <p style={{"color" : "green"}}>Save upto 60&#8377;</p>
            </div>
            <div className='my-4'>
                <h4 style={{"display" : "inline"}}>{mycard.category}</h4>
            </div>
            
            <div className='my-4' style={{ "width": "600px"}}>
                <h3 style={{"display" : "inline"}}>Description : </h3> 
                <p style={{"display" : "inline"}}>
                    Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom,<span><b>{mycard.description}</b></span> is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself.
                </p>
            </div>

            <div className='my-4'>
                <h3 style={{"display" : "inline"}}>Coupons for you  </h3> 
                <p className='my-1' >Special PriceGet extra <span style={{"color" : "red"}}>30% </span>off upto ₹60 on 1 item(s)</p>
            </div>

            <br/>
           

            <div className='my-4'>
                <h3  style={{"display" : "inline"}}>Available offers  </h3> 
                <p className='my-1'>Special PriceGet extra <span style={{"color" : "red"}}>30% </span> off upto ₹60 on 1 item(s)</p>
                <p className='my-1'>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More</p>
                <p>Bank Offer5% Cashback on Flipkart Axis Bank Card <span style={{"color" : "red"}}>T&C</span></p>
            </div>

            <br/>
            

            <div className='my-4'>
                <h3  style={{"display" : "inline" , }}>Delivery Address</h3> 
                <br/>

                    {mystate!==null ? 
                    
                        <div class="border border-2 my-4" style={{"display" : "block", "width" : "500px","box-sizing": "content-box"}}>
                        
                        <div style={{"padding" : "10px"}}>
                            <h5 className='my-4'>Address: <a style={{"color": "#085E7D"}}>{` ${obj.address}`} </a></h5>
                            <h5 className='my-4'>City: <a style={{"color": "#085E7D"}}>{`${obj.city}`} </a></h5>
                            <h5 className='my-4'>State:<a style={{"color": "#085E7D"}}>{` ${obj.state}`} </a></h5>
                            <h5 className='my-4'>Pincode:<a style={{"color": "#085E7D"}}>{` ${obj.pincode}`} </a></h5>
                            <div className='d-flex justify-content-start'>
                                <button className='btn btn-primary'>Change Address</button>
                            </div>
                        </div>
                        

                        </div> : ''
                    
                    } 

                    {mystate === null ?
                    
                    <div class="border border-2 my-4 p-5" style={{"display" : "block", "width" : "500px","box-sizing": "content-box"}}>
                        <h6 className='my-4'>Please <Link to='/login'>LogIn</Link> for address</h6>
                        
                    </div>  : ''
                    }

                    <br/>
                    <br/>

                    <div class="d-grid gap-2">
                        <button class="btn btn-warning" type="button" onClick={buynow}>Buy Now</button>
                        <button class="btn btn-success" onClick={addbook} type="button">Add to Cart</button>
                    </div>

            </div>

        </div>
        
        
    
    </div>


   
  )
}
