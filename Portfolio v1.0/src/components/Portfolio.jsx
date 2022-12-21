import React from 'react'
import Project from './elements/project'
import Portfolio1 from "../assets/portfolio1.jpg"
import Portfolio2 from "../assets/portfolio2.jpg"
import Portfolio3 from "../assets/portfolio3.jpg"

export default function Portfolio(){
  return (
    <div className='portfolio margins'>
      <div className='margins big'>
        <p>My Recent Work</p>
        <h2>Projects</h2>
      </div>
      <div className='projects'>
      <Project img={Portfolio1} title="Crypto" />
      <Project img={Portfolio2} title="Bank" />
      <Project img={Portfolio3} title="App" />
      <Project img={Portfolio1} title="Crypto" />
      </div>
    </div>
  )
}