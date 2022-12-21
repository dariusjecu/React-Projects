import React from 'react'
import {About, Contact_me, Experience, Footer, Header, Intro, Portfolio, Services} from "./components/index"

export default function App(){
  return (
    <div className='container'>
      <Header/>
      <div className='container-inner'>
        <Intro/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Contact_me/>
      </div>
      <Footer/>
    </div>
  )
}