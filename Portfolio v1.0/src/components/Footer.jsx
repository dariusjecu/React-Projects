import React from 'react'
import Linkdin from "../assets/linkdin.png"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"

export default function Footer(){

  function Select(event){
    const element = document.getElementsByClassName(event.target.id.split(" ").pop()) 
    window.scrollBy({
      top: element[0].getClientRects()[0].y,
      left: 0,
      behavior: 'smooth'
    });
    console.log(window.innerHeight)
  }

  return (
    <div className='footer margins'>
      <ul>
        <li id='intro' onClick={Select}>Home</li>
        <li id='about' onClick={Select}>About Me</li>
        <li id='experience' onClick={Select}>My Experience</li>
        <li id='portfolio' onClick={Select}>Portfolio</li>
        <li id='contact-me' onClick={Select}>Contact Me</li>
      </ul>
      <div>
        <img src={Linkdin} alt="linkdin" />
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
      </div>
    </div>
  )
}