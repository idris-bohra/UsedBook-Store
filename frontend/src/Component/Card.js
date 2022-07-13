import React from 'react'
import {useEffect,useState,useRef} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {bigcardaction , cartaction} from "../actions/action"
import axios from 'axios'
import './Css/card.css'
import img from '../images/the helping book.png'



export default function Card(props) {
    
    const history = useHistory()
    const dispatch = useDispatch();

    const mystate = useSelector((state)=>state.loginreducer)

    const obj = {id : props.id,
                name : props.name,
                price : props.price,
                author : props.author,
                description : props.description,
                category : props.category,
                count : props.count,
                productImg : props.productImg}


    const bigclick = ()=>{


        dispatch(bigcardaction(obj))
        history.push(`/bigpicture/Card/${props.id}`)

    }

    function addbook()
    {
        if(mystate!==null)
        {
            axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/user/cart/addtocart`, {userid : `${mystate.detail.data._id}`, productid : `${props.id}`}).then((idris)=>{

                console.log('added cart = ',idris)
                axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/user/cart/getcart/${mystate.detail.data._id}`).then((idris)=>{

                console.log('cart data = ',idris)
                if(idris.data.result !== null)
                {
                    dispatch(cartaction(idris.data.result.cartItems))        
                }
                else
                {
                    dispatch(cartaction(null))
                }     

            
                }).catch((err)=>{
                    console.log("found an error = ",err)
                })   

            
            }).catch((err)=>{

                console.log("found an error on card = ",err)

            })

            history.push('/mycart')
        }
        else
        {
            history.push('/login')
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
            history.push(`/buynow/${productId}`)
        }
    }


  return (
    <>          
            <div key={props.id} id={props.id} className='.flex-wrap img-fluid'>
                <div >
                    <div class="card my-5 mx-3 shadow-lg p-3 mb-5 bg-body" style={{"width": "18rem", "borderRadius" : "10px"}}>
                        <div id={`carouselExampleControls${props.id}`}  class="carousel slide"  data-bs-ride="carousel">
                                <div class="carousel-inner ">
                                    <div class="carousel-item active ">
                                    <img src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${props.productImg[0].img.filename}`} style={{height : '140px'}}  class=" mx-5 d-block" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${props.productImg[1].img.filename}`} style={{height : '140px'}}  class="mx-5 d-block" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={`http://localhost:${process.env.REACT_APP_SERVER}/public/${props.productImg[2].img.filename}`} style={{height : '140px'}}  class="mx-5 d-block" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${props.id}`} data-bs-slide="prev">
                            <svg style={{color:"black","width" : "30px"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${props.id}`} data-bs-slide="next">
                                
                                <svg style={{color:"black","width" : "30px"}} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>


                        <div class="card-body bigclick">
                            <div  onClick={()=>{bigclick()}}>
                                <h5 >{props.name}</h5>
                                <br/>
                                <h6>Author : {props.author}</h6>
                                <h6>Category : {props.category}</h6>
                                <p>Used book</p>
                                <h4 className='card-title'>Price : {props.price}rs</h4>
                            </div>
                            <br/>
                            <button type="button" onClick={()=>{buynow(props.id)}} class="btn btn-warning">Buy Now</button>
                            <button type="button" onClick={addbook} class=" mx-2 btn btn-success">Add to cart</button>

                        </div>
                    </div>
                </div>
            </div>
            
    </>
  )
}

