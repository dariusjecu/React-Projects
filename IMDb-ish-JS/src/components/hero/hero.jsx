import React, {useState, useEffect} from 'react'
import "./hero.css"
import { Context, } from '../../context'
import {MdNavigateNext} from "react-icons/md"
import {MdNavigateBefore} from "react-icons/md"
import {BsPlayCircle} from "react-icons/bs"

function Hero() {

    const [current, setCurrent] = useState(null)
    
    const Search = React.useContext(Context)
    
    useEffect(() => {
        Search().then((val) => {
            setCurrent(val)
        })
    }, [])

    useEffect(() => {
        
    }, [current])

  return current ? (
    <div className='hero' style={{backgroundImage: "white"}}>
        <div className='navigation'>
            <MdNavigateBefore/>
            <MdNavigateNext/>
        </div>
        <div className='content'>
            <img src={"current[0].image"} alt="" />
            <div className='desc'>
                <BsPlayCircle/>
                <div>
                    <h1>Title</h1>
                    <h2>Watch Now</h2>
                </div>
            </div>
        </div>
    </div>
  ) :

    (
        <></>
    )
}

export default Hero
