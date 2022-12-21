import React from 'react'
import "./about.css"
import Me from "../assets/me_about.jpg"

export default function About(){
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2 className='trans'>About Me</h2>
            <div className='me'>
                <div className='image-back trans'>
                    <img src={Me} alt="me-about" />
                </div>
                <div>
                    <p>I love exploring and creating.</p>
                    <p>I am a lifelong learner, starting at a young age with a passion for dance and continuing with my current two passion: programming and playing guitar.</p>
                    <a href="#contact" className='btn trans'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}