import {React} from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory , Link } from "react-router-dom";
import {signupaction , otpaction} from '../../actions/action'
import {useSelector , useDispatch} from "react-redux";



export default function AddBooks() {

    const history = useHistory();

    const [files, setfiles] = useState([]);
    const [category, setcategory] = useState([]);
    const [alert, setalert] = useState(true);
    const [alert2, setalert2] = useState(true);

    const mystate = useSelector((state) => state.loginreducer);
    const myseller = useSelector((state) => state.sellerreducer);
    console.log('mystate = ',mystate)
    console.log("myseller" ,myseller)

    function render()
    {

        axios.get(`http://localhost:${process.env.server}/category/getcategory`).then((resultcategory)=>{
             console.log(resultcategory.data.categories);
             setcategory(resultcategory.data.categories);
        }).catch((err)=>console.log(err))
    }

    let name1 , value1, id;

    const handelInputs = (e)=>{

        name1 = e.target.name;
        value1 = e.target.value;
        id = e.target.id

        setfiles([...files, value1])
    }



    const submitted = async(e)=>{

        e.preventDefault();

        var formdata = new FormData();

        for(let i=0;i<5;i++)
        {
            formdata.append(e.target[i].name , e.target[i].value)
        }

        for(let i=5;i<=7;i++)
        {
            formdata.append(`photos` , e.target[i].files[0])
            console.log("files = ",e.target[i].files[0])
        }


        for (let [key, value] of formdata.entries()) {
            if(value == '')
            {
                setalert2(false);
                return;
            }
        }

        try
        {
            for (let [key, value] of formdata.entries()) {
                console.log("formdata submitted = ",key,value)
            }
        }
        catch(err)
        {
            console.log(err)
        }

        
        if(mystate && myseller)
        {
            formdata.append('sellerId' , myseller.detail._id);
            formdata.append('userId', mystate.detail.data._id);
            setalert2(true);

            axios.post("http://localhost:8000/products/create" , formdata, {headers: { 'content-type': 'multipart/form-data;boundary=<calculated when request is sent>'}}).then((data)=>{
                console.log(data);
                history.push('/sellerprofile')
    
            }).catch((err)=>{
                console.log({err});
                history.push('/seller/addbooks')

            })


        }
        else
        {
            setalert(false);
            setalert2(true);
        }


        

    }

  return (

    
    <div> 
        {alert ? "" : <div class="alert alert-danger" role="alert" >
                                    <strong>You are not logged In!</strong> Please <Link to="/login" >Login</Link>
                                </div>}
        {alert2 ? "" : <div class="alert alert-danger" role="alert" >
                                    <strong>Please fill the fields properly!</strong>
                                </div>}
        <h1 className="d-flex flex-column justify-content-center align-items-center mx-5 my-5">ADD BOOKS</h1>

        <form onSubmit={submitted} className='d-flex flex-column justify-content-center  mx-5' style={{"border" : "1px solid black" , padding :"20px"}}>
        <div className="mb-3" >
            <label htmlFor="name" className="form-label">Book Name</label>
            <input type="text" className="form-control" id="name" name='name'   aria-describedby="emailHelp" autoComplete='off'/>
        </div>
        <div className="mb-3 " >
            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" className="form-control" id="author" name='author'  aria-describedby="emailHelp" autoComplete='off'/>
  
        </div>
        <div className="mb-3 " >
            <label htmlFor="price" className="form-label">Book price</label>
            <input type="text" className="form-control col-sm-2" id="price" name='price'  aria-describedby="emailHelp" autoComplete='off'/>
  
        </div>
        
        <div className="mb-3 my-3" >
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' aria-describedby="textHelp" autoComplete='off'/>
        </div>

        <div className="mb-3 my-3" >
            <label htmlFor="category"  className="form-label">Select Category</label>
            <select name='category'  onClick={render}  class="form-select" aria-label="Default select example">
                <option value=''selected>Select category</option>
                
                {category.map((element) => {
                    const id = element._id;
                    const name = element.name;
                    return (
                        <option key={id} value={name}>{name}</option>
                    );
                })}
                
            </select>
        </div>

        <div className="mb-3 my-3" >
            <label htmlFor="upload images" className="form-label">Upload Images <p style={{color : "red"}}>(At least three images are required)</p> </label>
            <div class="mb-3">
                <input class="form-control" onChange={handelInputs} type="file" name='photos' id="photos"/>
            </div>
            <div class="mb-3">
                <input class="form-control" onChange={handelInputs} type="file" name='photos' id="photos"/>
            </div>
            <div class="mb-3">
                <input class="form-control" onChange={handelInputs} type="file" name='photos' id="photos"/>
            </div>
        </div>

    
        <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

