import React from 'react'

export default function BoxServices(props){
  return (
    <div className='box-services'>
        <img src={props.icon} alt="icon" />
        <h3>{props.title}</h3>
        <p>{props.number}</p>
    </div>
  )
}