import React from 'react'
import axios from 'axios'
import Card from './Card'
import { Link } from "react-router-dom";
import {useState,useRef,useEffect} from 'react';
import { useHistory,useLocation } from "react-router-dom";
import {bigcardaction} from '../actions/action'
import {loginaction,cartaction} from '../actions/action';
import {useSelector , useDispatch} from "react-redux";

export default function Mycart() {

    const [finalresult, setfinalresult] = useState([])


    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    var obj = {}
    var total = 0;
    var discount;
    var actualprice;
    var final;
    var deliverycharges;

    const [totalprice, settotalprice] = useState(0);
    const mystate = useSelector((state)=> state.loginreducer);
    const mycart = useSelector((state)=> state.cartreducer);
    console.log("cart mycart = ",mycart)
    console.log('cart mystate = ',mystate)

    if(mycart!==null)
    {
        for(let i=0;i<mycart.length;i++)
        {
            total = (total + mycart[i].price)
            discount = (total *30)/100;
            actualprice = total + discount;
            if(mycart.length > 1)
            {
                deliverycharges = 100;
            }
            else
            {
                deliverycharges = 40;
            }
            final = total + deliverycharges;


            obj.total = total;
            obj.discount = discount;
            obj.deliverycharges=deliverycharges;
            obj.actualprice = actualprice;
            obj.final = final;

        }
    }
    
    useEffect(async()=>{

        if(mystate!==null)
        {
            console.log("inside useeffect")
            let _id = mystate.detail.data._id
            axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/user/cart/getcart/${_id}`).then((idris)=>{

                console.log('cart data = ',idris)
                if(idris.data.result !== null)
                {
                    setfinalresult(idris.data.result.cartItems)                    
                    dispatch(cartaction(idris.data.result.cartItems))        
                }
                else
                {
                    dispatch(cartaction(null))
                }     

            
            }).catch((err)=>{
                console.log("found an error = ",err)
            })
        }

},[mycart,location])

function bigcard(obj)
{   
    console.log("mycart bigcard = ",obj)
    dispatch(bigcardaction(obj))
    history.push(`/bigpicture/Card/${obj.id}`)
}

function removeProduct(productId)
{
    console.log("removeProduct")

    axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/user/cart/removecartItem`, {userid : `${mystate.detail.data._id}`, productId : `${productId}`}).then((idris)=>{

        console.log("removed product is here = ", idris)


    }).catch((err)=>{
        console.log("found an error for removing product = ",err)
    })

    axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/user/cart/getcart/${mystate.detail.data._id}`).then((idris)=>{

        console.log('cart data = ',idris)
        if(idris.data.result !== null)
        {
            setfinalresult(idris.data.result.cartItems)                    
            dispatch(cartaction(idris.data.result.cartItems))        
        }
        else
        {
            dispatch(cartaction(null))
        }     


    }).catch((err)=>{
        console.log("found an error = ",err)
    })

}


  return (
    <>
        <div class="container">
            <div class="d-flex">
                <div class=" my-5" style={{width : "80%"}}>
                    {finalresult.length!==0 ? finalresult.map((element) => {

                    const obj = {id : element._id,
                        name : element.name,
                        price : element.price,
                        author : element.author,
                        description : element.description,
                        category : element.category,
                        count : element.count,
                        productImg : element.productImg}

                    const id = element._id;
                    const name = element.name;
                    const price = element.price;
                    const author = element.author;
                    const description = element.description;
                    const category = element.category;
                    const count = element.count;
                    const productImg = element.productImg;
                    const offer = (price * 30)/100;
                    const finalcut = (price + offer)
                    // settotalprice(totalprice + price)
                    return (
                        <>          
                            <div class="d-flex flex-row my-4 ">
                                <div id={`carouselExampleControls${id}`} style={{width : "210px"}}  class="carousel slide d-flex justify-content-center"  data-bs-ride="carousel">
                                <div class="carousel-inner ">
                                    <div class="carousel-item active ">
                                    <img src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${productImg[0].img.filename}`} style={{height : '120px'}}  class=" mx-5 d-block" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${productImg[1].img.filename}`} style={{height : '120px'}}  class="mx-5 d-block" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${productImg[2].img.filename}`} style={{height : '120px'}}  class="mx-5 d-block" alt="..."/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="prev">
                                <svg style={{color:"black","width" : "30px"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="next">
                                    
                                    <svg style={{color:"black","width" : "30px"}} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    <span class="visually-hidden">Next</span>
                                </button>
                                </div>

                                <div className='mx-5' >
                                    <div class="" onClick={()=>{bigcard(obj)}}>
                                        <h5>{name}</h5>
                                        <h4 style={{display : "inline"}}>&#8377;{price}</h4>
                                        <p className='mx-3' style={{textDecoration : "line-through",display : "inline",fontSize : "18px",color:'red'}}>&#8377;{finalcut} </p>
                                        <p className='mx-1' style={{display : "inline",color:"green",fontSize : "16px"}}>save upto 30%</p>
                                    </div>
                                    <button class="btn btn-warning my-3" onClick={()=>{removeProduct(id)}}>Remove</button>
                                </div>
                                
                                <div className='mx-1' onClick={()=>{bigcard(obj)}}>

                                    <p style={{fontSize : '15px'}} >Delivery charges applied | 40&#8377;<p style={{fontSize : '12px' , color:'red'}} className='my-0'>No return policy</p><span style={{color : "grey"}}>7 Days delivery promise</span></p>   
                                    
                                </div>
      
                            </div>
                            <hr/>
                        </>

                    );

                    }): ''}
                </div>              

                {finalresult.length != 0 ? <div className='my-5 mx-3  shadow-lg p-3 mb-5 bg-body' style={{marginLeft : "60px" , width:"600px",height : "100%"}}>
                <div className=' flex-row justify-content-center align-item-center'>
                

                        <div class="card-body">
                            <div>
                                <h2 >Price Details ({mycart.length})</h2>
                                <hr/>
                                <br/>
                                <div class="d-flex justify-content-between">
                                    <h5>Total Item </h5>
                                    <h5 style={{color : "darkorange"}}>{mycart.length}</h5>
                                </div>
                                <br/>
                                <div class="d-flex justify-content-between">
                                    <h5>Actual Price </h5>
                                    <h5 style={{color : "#121212"}}>&#8377;{obj.actualprice}</h5>
                                </div>
                                <br/>
                                <div class="d-flex justify-content-between">
                                    <h5>Discount </h5>
                                    <h5 style={{color : "green"}}>-&#8377;{obj.discount}</h5>
                                </div>
                                <br/>
                                <div class="d-flex justify-content-between">
                                    <h5>Delivery Charges </h5>
                                    <h5 style={{color : "orange"}}>+&#8377;{obj.deliverycharges}</h5>
                                </div>
                                <hr/>
                                <div class="d-flex justify-content-between">
                                    <h3>Price</h3>
                                    <h3>&#8377;{obj.final}</h3>
                                </div>
                            </div>
                            <br/>
                            <div class="d-grid gap-2">
                                <button style={{background: "#fb641b",boxShadow :" 0 1px 2px 0 rgb(0 0 0 / 20%)",   border: "none",color: "#fff"}} class="btn btn-primary" type="button">Place Order</button>
                            </div>                           

                        </div>
                </div>
            </div>:""}

            </div>
    </div>


    {
        finalresult.length == 0 ? <h5 className='d-flex flex-column justify-content-center align-items-center mx-5 my-5'> Cart is Empty -- Add books here</h5> : '' 
    }
    {
        mystate ==null ? <h5 className='d-flex flex-column justify-content-center align-items-center mx-5 my-5'> <Link to='/login'>Login</Link></h5> : '' 
    }
    </>
  
)}