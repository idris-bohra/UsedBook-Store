import React from 'react'
import {useEffect,useState,useRef} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import Card from './Card'
import axios from 'axios'
import img from '../images/the helping book.png'


export default function CatCard() {

    const alert= useRef();
    const head= useRef();
    const products = useSelector((state)=> state.catproductsreducer);


  return (

    <>

    { products !== null && products.result.products.length > 0 ? <h1 ref={head} className="d-flex flex-column justify-content-center align-items-center mx-5 my-5">{`${products.category} Books`}</h1> : ""}

    <div class="d-flex flex-wrap justify-content-center ">

        {products.result.products.map((element) => {

                    const id = element._id;
                    const name = element.name;
                    const price = element.price;
                    const author = element.author;
                    const description = element.description;
                    const category = element.category;
                    const count = element.count;
                    const productImg = element.productImg;
                    return (
                      
                        <Card id = {id} name = {name} price = {price} author={author} description = {description} category = {category} count={count} productImg= {productImg} />

                    );
            })}

        {products === null || products.result.products.length === 0 ? 
         <div ref={alert}  className=' my-5 d-flex justify-content-center align-item-center img-fluid'>
            <h1>There is no product found of this Category</h1>
        </div> : ''}
            
    </div>

</>
  )
}
