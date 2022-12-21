import React from 'react'

export default function Skill(props){
  return (
    <div className='skill'>
        <div>
            <img src={props.image} alt="logo" />
            <h3>{props.title}</h3>
        </div>
    </div>
  )
}