import React from 'react'
import BoxServices from './elements/box_services'
import Experience from '../assets/experience.png'
import Clients from '../assets/clients.png'
import Projects from '../assets/projects.png'
import Me from '../assets/me_about.jpg'

export default function About(){

  function GoTo(event){
    const element = document.getElementsByClassName(event.target.id) 
    window.scrollBy({
      top: element[0].getClientRects()[0].y,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='about section-margins'>
      <div className='margins big'>
        <p>Get To Know</p>
        <h2>About Me</h2>
      </div>
      <div className='margins'>
        <div className='profile-back'></div>
        <img className='profile-front' src={Me} alt="profile-front" />
      </div>
      <div className='my-work margins'>
        <BoxServices icon={Experience} title="Experience" number="3+ Years Working"/>
        <BoxServices icon={Clients} title="Clients" number="300+ Worldwide"/>
        <BoxServices icon={Projects} title="Projects" number="80+ Completed"/>
      </div>
      <div>
        <p>vfaewdvgaerg vaeswrgvaerdvgfaesdfegva ersdvgaefrgbvawersgva erdfgvaerg</p>
        <button id='contact-me' onClick={GoTo} className='talk'>Let's Talk</button>
      </div>
    </div>
  )
}