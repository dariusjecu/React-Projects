import React from 'react'
import Contact_box from './elements/contact-box'
import Email from "../assets/email.png"
import Messanger from "../assets/messanger.png"
import WhatsApp from "../assets/whatsapp.png"

export default function Contact_me(){
  return (
    <div className='contact-me margins'>
      <div className='margins big'>
        <p>Get in Touch</p>
        <h2>Contact Me</h2>
      </div>
      <div className='contact-boxes'>
        <Contact_box img={Email} type="Email" name="dariusjecu@yahoo.com" check={true} />
        <Contact_box img={Messanger} type="Messanger" name="Darius Jecu" check={false}/>
        <Contact_box img={WhatsApp} type="WhatsApp" name="+447835061888" check={false}/>
      </div>
      <form id='contact-form' action="">
        <input type="text" placeholder='Your Full Name' />
        <input type="text" placeholder='Your Email' />
        <textarea className='paragraph' placeholder='Your Message' />
        <input className='submit' type="submit" value="Submit"/>
      </form>
    </div>
  )
}