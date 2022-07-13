import React from 'react'
import {useEffect,useState,useRef} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory,useLocation } from "react-router-dom";
import {bigcardaction , cartaction} from "../../actions/action"
import Card2 from '../Sellbook/Card2'
import axios from 'axios'


export default function UnsoldProducts() {

    const sellerstate = useSelector((state)=> state.sellerreducer);
    const [products, setproducts] = useState(null)
    const {pathname} = useLocation()

    useEffect( ()=>{

        getproducts()
        
    }, [sellerstate])

    function getproducts()
    {
        axios.post(`http://localhost:${process.env.REACT_APP_SERVER}/products/getunsold`, {sellerId : sellerstate.detail._id}).then((result)=>{
            if(result)
            {
                setproducts(result.data.products)
                console.log("result = ",result.data.products)
            }
       
        }).catch((error)=>{
            console.log({error})
        })
    }

   


  return (
    <>
         { products !== null && products.length > 0 ? <h1 className="d-flex flex-column justify-content-center align-items-center mx-5 my-5">{`Your unsold Books`}</h1> : ""}

        <div class="d-flex flex-wrap justify-content-center ">

            { products !== null ? products.map((element) => {

                        const id = element._id;
                        const name = element.name;
                        const price = element.price;
                        const author = element.author;
                        const description = element.description;
                        const category = element.category;
                        const count = element.count;
                        const productImg = element.productImg;
                        return (
                        
                            <Card2 id = {id} render={getproducts} name = {name} price = {price} author={author} description = {description} category = {category} count={count} productImg= {productImg} />

                        );

                }) : ""}

            {products === null || products.length === 0 ? 
            <div  className=' my-5 d-flex justify-content-center align-item-center img-fluid'>
                <h1>You have no unsold books here</h1>
            </div> : ''} 

        </div>

                
    </>
  )
}
