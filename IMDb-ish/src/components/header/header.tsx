import React from 'react'
import "./header.css"
import Imdb from "../../assets/imdb.png"
import {BiSearch} from "react-icons/bi"

function Header() {

  return (
    <div className='header'>
        <img src={Imdb} alt="logo" />
        <div className='search'>
            <input type="text" placeholder='Search IMDb-ish'/>
            <BiSearch/>
        </div>
        <button>Sign in</button>
        <div>
            <button>EN 🢛</button>
        </div>
    </div>
  )
}

export default Header
