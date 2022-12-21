import React from 'react'
import {About, Contact, Experience, Footer, Intro, Nav, Portfolio} from "./components"
import {GiSpatter} from "react-icons/gi"

function App() {
  return (
    <div className='animation'>
      <GiSpatter className='spatter trans'/>
      <Nav/>
      <Intro/>
      <About/>
      <GiSpatter className='spatter right trans'/>
      <Experience/>
      <Portfolio/>
      <GiSpatter className='spatter bottom trans'/>
      <Contact/>
    </div>
  )
}

export default App
