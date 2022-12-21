import React from 'react'
import Rating from "./images/star.png"
import Photo from "./images/katie-zaferes.png"

export default function Card(props){
    return(
        <div className='card'>
            <img src={props.img} className='card-image'></img>
            <div className='panel'>
                <img className='star' src={Rating}></img>
                <span>{props.rating}</span>
                <span className='grey'>({props.nr_reviews})-USA</span>
            </div>
            <div className='parag'>
                <p>{props.text}</p>
                <p><span className='bolded'>From ${props.price}</span> / person</p>
            </div>
            
        </div>
    )
}