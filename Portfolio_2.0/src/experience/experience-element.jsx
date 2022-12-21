import React from 'react'
import "./experience.css"

export default function Element(props){
    return (
        <div className='element'>
            {<props.image className="icon trans"/>}
            <h5>{props.name}</h5>
        </div>
    )
}