import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Details from "./Details"
import Personal from "./Personal_Details"
import Social from "./Social_Links"
import Picture from './Picture'
import Thumbnail from "./Social/thumbnail.jpg"

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div className='container'>
      <Picture />
      <Details />
      <Personal />
      <Social />
    </div>
)
