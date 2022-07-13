import React from 'react'

export default function ContactUs() {
  return (
      <div>
      <h1 className="d-flex flex-column justify-content-center align-items-center mx-5 my-5">Contact Us</h1>

      <form className='d-flex flex-column justify-content-center  mx-5' style={{"border" : "1px solid black" , padding :"20px"}}>
      <div className="mb-3" >
          <label htmlFor="firstname" className="form-label">Name</label>
          <input type="text" className="form-control" id="firstname" name='firstname'   aria-describedby="emailHelp" autoComplete='off'/>
      </div>
      <div className="mb-3 my-3" >
          <label htmlFor="emailid" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailid" name='emailid'  aria-describedby="emailHelp" autoComplete='off'/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Messege</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      
      <div className="mb-3">
          <label htmlFor="contactnumber" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="contactnumber"  name='contactnumber' autoComplete='off'/>
      </div>

      <div>
      <button type="button" class="btn btn-primary">Submit</button>
      </div>
      </form>
  </div>
  )
}
