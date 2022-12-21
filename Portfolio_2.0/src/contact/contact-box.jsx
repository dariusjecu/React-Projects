import React from 'react'
import "./contact.css"

export default function Contact_Box(props){
    return (
        <div className='contact-box trans'>
            <props.element className="img"/>
            <h3>{props.title}</h3>
            <p className='check'>{props.desc}</p>
            {props.title == "Email" ? <p className='email-check'>Complete the form <br/> or</p> : <></>}
            <a href={props.url} target="_blank">Click here and send me a message</a>
        </div>
    )
}