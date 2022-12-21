import React from 'react';

export default function Benefit(props){
    return (
        <div className='benefit'>
            <img src={props.img} alt={`${props.img}`} />
            <div>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}