import React from 'react';
import axios from 'axios'
import {useRef , useEffect , useState} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory,useLocation } from "react-router-dom";
import {logoutaction , catproductsaction, sellerlogoutaction} from '../actions/action'
import '../Component/Css/Navbar.css'

export default function Navbar(props) {

  const history = useHistory();
  const {pathname} = useLocation();
  const [username, setusername] = useState('');
  const [category, setcategory] = useState([]);
  const [categoryProducts, setcategoryProducts] = useState([]);

  // REACT-REDUX
  const mystate = useSelector((state)=> state.loginreducer);
  const catproducts = useSelector((state)=> state.catproductsreducer);
  const myseller = useSelector((state)=> state.sellerreducer);
  const mycarts = useSelector((state)=> state.cartreducer);
  const dispatch = useDispatch();

  // USE-REF
  const profileclass = useRef();
  const sellerprofile = useRef();
  const login  = useRef();
  const logout  = useRef();
  const signup  = useRef();
  const mycart  = useRef();

  useEffect(() => {

    
    
    if(mystate !== null)
    {
      setusername(mystate.detail.data.firstname);
      profileclass.current.classList.remove("disabled");
      signup.current.style.display =  "none";
      mycart.current.style.display =  "block";
      login.current.style.display =  "none";
      logout.current.style.display = "block";
    }
    else
    {
      setusername("User's");
      profileclass.current.classList.add("disabled");
      signup.current.style.display = "block";
      mycart.current.style.display = "none";
      login.current.style.display = "block";
      logout.current.style.display = "none";
    }
    
    
    
  });


  function render()
  {
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/category/getcategory`).then((resultcategory)=>{
      console.log(resultcategory.data.categories);
      setcategory(resultcategory.data.categories);
    }).catch((err)=>console.log(err))

  }
  
  const getproducts = (e)=>{
    
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER}/products/category/${e.target.id}`).then((result)=>{

      console.log(result.data)
          
      dispatch(catproductsaction(result.data , e.target.id))
      history.push(`/products/category/${e.target.id}`)
    
            
    }).catch(err=> console.log(err))

  }


  const logoutfun =  ()=>{

    if(window.confirm("are you sure you want to logout"))
    {
      login.current.style.display = "block";
      logout.current.style.display = "none";
      dispatch(logoutaction())
      dispatch(sellerlogoutaction())

    }
    else
    {

      login.current.style.display = "none";
      logout.current.style.display = "block";
      history.push(`./${pathname}`)

    }

  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid mx-3">
    <Link className="navbar-brand" to="/">UsedBookStore</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className= 'nav-link' to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className= 'nav-link' to="/aboutus">AboutUs</Link>
        </li>
        <li className="nav-item">
        <Link className= 'nav-link' to="/contactus">ContactUs</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" onClick={render} aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                {category.map((element) => {
                    const id = element._id;
                    const name = element.name;
                    return (
                      <li onClick={getproducts} key={id} id={name} className= 'dropdown-item'> {name}</li>
                    );
                })}
          </ul>
        </li>

        
      </ul>

        
      <form className="d-flex">
        
        <input className="form-control me-2" type="search" placeholder="search any book here" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        <br/>
        <br/>
      <li className="d-flex navbar-nav">
            <Link className= 'nav-link' ref={login} to="/login">Login</Link>
            <Link className= 'nav-link' ref={logout} onClick={logoutfun} to="/">Logout</Link>
      </li>
      <li className="d-flex navbar-nav">
            <Link className= 'nav-link' ref={signup} to="/signup">SignUp</Link>
      </li>

      <li className="d-flex navbar-nav">
          <Link className= 'nav-link position-relative' ref={mycart} to="/mycart">MyCart
            <span class="my-1 position-absolute top-0 start-60 translate-middle badge rounded-pill bg-danger">
              {mycarts!== null ? mycarts.length : ''}
              <span class="visually-hidden">unread messages</span>
            </span>
          </Link>
      </li>

      <li className="navbar-nav mx-2">          
            <Link className="profilelink nav-link disabled" ref={profileclass} to="/myprofile">{`${username} profile`}</Link>
          
      </li>
      {myseller!==null ? <li className="d-flex navbar-nav">
        <Link className="nav-link" ref={sellerprofile} to="/sellerprofile">{`Seller profile`}</Link>
      </li> : ''} 


    </div>
  </div>
</nav>
  )
}







    
  
