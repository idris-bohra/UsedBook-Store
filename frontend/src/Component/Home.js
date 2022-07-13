import React from 'react'
import axios from 'axios'
import {useRef , useEffect , useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory,useLocation } from "react-router-dom";
import Card from './Card'
import '../Component/Css/Home.css'


export default function  Home() {
  
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const catproducts = useSelector((state)=> state.catproductsreducer);

  const [first, setfirst] = useState([])
  const [second, setsecond] = useState([])
  const [third, setthird] = useState([])
  const [forth, setforth] = useState([])

  console.log("process.env.SERVER = ",process.env.REACT_APP_SERVER)

  function getproducts1(category)
  {

    axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/products/category/${category}`).then((result)=>{
      

          
      setfirst(result.data.products)

      
      
      
      
    }).catch(err=> console.log(err))

  }
  
  function getproducts2(category)
  {

    axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/products/category/${category}`).then((result)=>{
      

      
      setsecond(result.data.products)

     
      
      
    }).catch(err=> console.log(err))

  }
  
  function getproducts3(category)
  {

    axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/products/category/${category}`).then((result)=>{
      
      

      setthird(result.data.products)      
      
      
    }).catch(err=> console.log(err))

  }
  
  function getproducts4(category)
  {

    axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/products/category/${category}`).then((result)=>{
   
      
      setforth(result.data.products)      

      
      
    }).catch(err=> console.log(err))

  }
  
  
    
  useEffect(()=>{

    getproducts1('Self-Helping');
    getproducts2('Competitive-Exam');
    getproducts3('Fantasy');
    getproducts4('fiction');
    
  },[Location])
  



  return (
    <>

        <div className='d-flex flex-column tagline justify-content-center align-items-center'>
            <h1>Welcome to the UsedBookStore</h1>
            <br/>
            <h5 className='mx-5'> Are you on Low budget to Buy a good book? or You want to sell your used books?
            Well you have come to the right place.We provide Best quality second hand bookstore in best price and give opportunity to sell your used book.</h5>
        </div>


       <div className='my-3 mx-3'>
 
          <h1>Top Self-helping Books</h1>

        </div>

        <div class="d-flex flex-wrap justify-content-center p-3" >

            {first === null ? '' : first.slice(0, 4).map((element,index) => {

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

              )
            })}


        </div>

       <div className='my-5 mx-3'>
 
          <h1>Top Competitive Exam Books</h1>

        </div>

        <div class="d-flex flex-wrap justify-content-center p-3" >

            {second === null ? '' : second.slice(0, 4).map((element,index) => {

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

              )
            })}


        </div>

       <div className='my-5 mx-3'>
 
          <h1>Top Fantasy Books</h1>

        </div>

        <div class="d-flex flex-wrap justify-content-center p-3" >

            {third === null ? '' : third.slice(0, 4).map((element,index) => {

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

              )
            })}


        </div>

       <div className='my-5 mx-3'>
 
          <h1>Top Fictional Books</h1>

        </div>

        <div class="d-flex flex-wrap justify-content-center p-3" >

            {forth === null ? '' : forth.slice(0, 4).map((element,index) => {

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

              )
            })}


        </div>

    </>
  )
}
