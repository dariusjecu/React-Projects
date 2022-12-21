import React from 'react'
import data from "./data"

function Content(){
    const content = data.map(item => {
        return(
            <div className='content'>
                <Component
                    {...item}
                />
            </div>
        )
    })
    return content;
}

function Component(props){
    return (
            <div className='component'>
                <div className='left'>
                    <img src={props.leftImg} />
                </div>
                <div className='right'>
                    <div className='location'>
                        <img className='icon' src="../../public/img/placeholder.png" />
                        <h3>{props.country}</h3>
                        <a href={props.location}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p>{props.date}</p>
                    <p>{props.desc}</p>
                </div>
            </div>
    )
}

export {Content}