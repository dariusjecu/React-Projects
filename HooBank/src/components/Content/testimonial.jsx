import React from 'react';
import {quotes} from "../../assets/index"

export default function Testimonial(props){
    return (
        <div className='testimonial'>
            <img src={quotes} alt="quotes" />
            <p>{props.comment}</p>
            <div className='profile'>
                <img src={props.profile} alt="profile-picture" />
                <div>
                    <h2>{props.name}</h2>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    )
}