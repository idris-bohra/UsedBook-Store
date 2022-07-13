import './App.css';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
// import {Navbar , Nav , Container, NavDropdown} from 'react-bootstrap'
import Signup from './Component/Signup';
import Signuptwo from './Component/Signuptwo';
import ContactUs from './Component/ContactUs';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {useState , useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {Login} from './Component/Login';
import { useLocation } from "react-router-dom"
import OTP from './Component/OTP'
import SellbooksSignup from './Component/Sellbook/SellbooksSignup';
import {SellbooksLogin} from './Component/Sellbook/SellbooksLogin';
import Myprofile from './Component/Myprofile/Myprofile';
import SellerProfile from './Component/Sellbook/SellerProfile';
import AddBooks from './Component/AddBooks/AddBooks'
import Tems from'./Component/Tems'
import CatCard from './Component/CatCard';
import BigCard from './Component/BigCard';
import Mycart from './Component/Mycart';
import UnsoldProducts from './Component/Sellbook/UnsoldProducts';

// hello

function App() {


  // const {pathnameofapp} = useLocation();  // It is giving an error while using useLocation in App.js
  // console.log("pathnameofapp" , pathnameofapp)

  const products = useSelector((state)=> state.catproductsreducer);


  

  return (
    
   <>
      <Router>
          <Navbar />  
        <Switch>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/mycart">
            <Mycart />
          </Route>
          <Route exact path="/contactus">
            <ContactUs/>
          </Route>
          <Route exact path="/signup">
            <Signuptwo />
          </Route>
          <Route exact path="/authentication">
            <OTP/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/myprofile">
            <Myprofile/>
          </Route>
          <Route exact path="/sellbooks">
            <SellbooksSignup/>
          </Route>
          <Route exact path="/sellerlogin">
            <SellbooksLogin/>
          </Route>
          <Route exact path="/sellerprofile">
            <SellerProfile/>
          </Route>
          <Route exact path="/seller/addbooks">
            <AddBooks/>
          </Route>
          {<Route exact path="/bigpicture/Card/:id">
            <BigCard />
          </Route>}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products/category/:slug">
            <CatCard/>
          </Route>
          <Route exact path="/seller/unsoldbooks">
            <UnsoldProducts/>
          </Route>
          <Route exact path="/Tems">
            <Tems/>
          </Route>
        </Switch>
    </Router>
   </>

  );
}

export default App;
