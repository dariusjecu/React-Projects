import React from 'react';

export default function Number(props){
    return (
            <div className='number'>
                <h3 className={!props.index ? 'border' : ""}>{props.title}</h3>
                <h3 className='text-gradient-color'>{props.desc}</h3>
            </div>
    )
}