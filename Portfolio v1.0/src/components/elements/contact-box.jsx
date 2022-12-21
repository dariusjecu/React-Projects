import React from 'react'

export default function Contact_box(props){

  function GoTo(){
    window.scrollBy({
      top: document.getElementById("contact-form").getClientRects()[0].y,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div onClick={props.check ? GoTo : () => {}} className='contact-box'>
      <img src={props.img} alt="icon" />
      <h3>{props.type}</h3>
      <p>{props.name}</p>
      <p>Click here and send me a message</p>
    </div>
  )
}