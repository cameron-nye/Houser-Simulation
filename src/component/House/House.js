import React from 'react'
import './house.css'

export default function House(props){
  return(
    <div className='houseDisp'>
      <div>Property Name: {props.name}</div> 
      <div>Address: {props.address}</div> 
      <div>City: {props.city}</div> 
      <div>State: {props.state}</div> 
      <div>Zipcode: {props.zipcode}</div> 
      <button onClick={() => props.deleteMethod(props.id)}>Delete</button>

    </div>
  )
}