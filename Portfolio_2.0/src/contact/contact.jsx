import React, {useRef} from 'react'
import "./contact.css"
import Contact_Box from './contact-box'
import {AiOutlineMail} from "react-icons/ai"
import {BsMessenger} from "react-icons/bs"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import emailjs from "emailjs-com"

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9yh6wio', 'template_wn6ow6d', form.current, 'Y7r9Dd1wfazTtrEP1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset()
      };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='contact'>
                <div className='contact-boxes'>
                    <Contact_Box element={AiOutlineMail} title={"Email"} desc={"dariusjecu@yahoo.com"} url={"mailto:dariusjecu@yahoo.com"}/>
                    <Contact_Box element={BsMessenger} title={"Messenger"} desc={"dariusjecu"} url={"https://m.me/darius.jecu"}/>
                    <Contact_Box element={AiOutlineWhatsApp} title={"WhatsApp"} desc={"+447835061888"} url={"https://api.whatsapp.com/send?phone=00447835061888"}/>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="text" name='email' placeholder='Your Email' required/>
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn trans'>Send Message</button>
                    </form>
                    <div className='social'>
                    <a href="https://linkedin.com" target="_blank"><AiFillLinkedin className='img'/></a>
                    <a href="https://github.com" target="_blank"><AiFillGithub className='img'/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}