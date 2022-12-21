import React from 'react';
import Email from "./Social/Email.png"
import Linkdin from "./Social/Linkdin-blue.png"


export default function Details(){
    return (
        <div className='details-content'>
            <h1>Darius Jecu</h1>
            <h3>Frontend Developer</h3>
            <h4>dariusjecu.website</h4>
            <div className='buttons'>
                <button className='email'><img src={Email}></img> Email</button>
                <button className='linkdin'><img src={Linkdin}></img>Linkedin</button>
            </div>
        </div>
    )
}