import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from "./Header"
import {Details} from "./Details"
import {Footer} from "./Footer"

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='container'>
    <Header/>
    <Details/>
    <Footer/>
  </div>
)
