import React from 'react'
import { useState } from 'react'
import Me from "../assets/me.png"

export default function Intro(){

  const [dimensionH, setDimensionH] = useState(0)
  const [dimensionW, setDimensionW] = useState(0)

  function Dimension(event){
    setDimensionH(event.target.height + 29)
    setDimensionW(event.target.width)
  }

  function GoTo(event){
    const element = document.getElementsByClassName(event.target.id) 
    window.scrollBy({
      top: element[0].getClientRects()[0].y,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='intro section-margins'>
      <div className='big'>
        <p>Hello, I'm</p>
        <h1>Darius Jecu</h1>
        <p>Frontend Developer</p>
      </div>
      <div>
        <button className='cv'><a href="../assets/DariusCV.docx" download={"../assets/DariusCV.docx"}>Download CV</a></button>
        <button id='contact-me' onClick={GoTo} className='talk'>Let's Talk</button>
      </div>
      <div className='images margins'>
        <div style={{height: `${dimensionH}px`, width: `${dimensionW}px`}} className='back-image'></div>
        <img onLoad={Dimension} src={Me} alt="my-photo" />
      </div>
    </div>
  )
}