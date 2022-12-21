import React from 'react'

export default function Project(props){
  return (
    <div className='project'>
      <img src={props.img} alt="project-image" />
      <h3>{props.title}</h3>
      <div>
        <button>Github</button>
        <button>Live Demo</button>
      </div>
    </div>
  )
}