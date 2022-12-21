import React from 'react'
import Grid from "./images/photo-grid.png"

export default function Description(){
    return(
        <div className='description'>
            <img src={Grid}></img>
            <div className='text'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities 
                    led by one-of-a-kind hosts—all without 
                    leaving home.</p>
            </div>
        </div>
    )
}