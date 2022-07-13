import React from 'react'
import {useState} from 'react'

export default function Tems() {

    const [object, setobject] = useState({maritalstatus : ""})

    function handleChange(e)
    {
        console.log("value = ",e )
        object.maritalstatus = e
        console.log(object)


    }


  return (
    
    <select name='option' onChange={(event)=>{handleChange(event.target.value)}}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  )
}
