import React,{useState, useEffect} from 'react'
import About from '../assets/about.png'
import Contact_me from '../assets/contact-me.png'
import Experiences from '../assets/experiences.png'
import Home from '../assets/home.png'
import Portfolio from '../assets/portfolio.png'

export default function Header(){

  const [location, setLocation] = useState([true,false,false,false,false])

  function Select(event){
    const [id] = event.target.id
    setLocation([false,false,false,false,false])
    setLocation(prevVal => prevVal.map((val,i) => i==id ? true : false))
    const element = document.getElementsByClassName(event.target.id.split(" ").pop()) 
    window.scrollBy({
      top: element[0].getClientRects()[0].y,
      left: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener("scroll", () => {
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
      document.getElementById("header").classList = "header gone"
    else
      document.getElementById("header").classList= "header"
  })

  return (
    <div id='header' className='header'>
      <img id="0 intro" className={location[0] ? "selected" : ""} onClick={Select} src={Home} alt="home" />
      <img id="1 about" className={location[1] ? "selected" : ""} onClick={Select} src={About} alt="about" />
      <img id="2 experience" className={location[2] ? "selected" : ""} onClick={Select} src={Experiences} alt="experiences" />
      <img id="3 portfolio" className={location[3] ? "selected" : ""} onClick={Select} src={Portfolio} alt="portfolio" />
      <img id="4 contact-me" className={location[4] ? "selected" : ""} onClick={Select} src={Contact_me} alt="contact" />
    </div>
  )
}