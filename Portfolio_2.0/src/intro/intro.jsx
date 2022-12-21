import React from 'react'
import "./intro.css"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import Me from "../assets/me.png"
import CV from "../assets/DariusCV.pdf"

export default function Intro(){
    return (
        <section className='container'>
            <div>
                <h5>Hello I am</h5>
                <h1>Darius Jecu</h1>
                <h5>Frontend Developer</h5>
                <div className='buttons'>
                    <a href={CV} className="btn change" download>Download CV</a>
                    <a href="#contact" className="btn trans">Lets Talk</a>
                </div>
            </div>
            <div className='about-me'>
                <div className='socials'>
                    <a href="https://github.com" target="_blank"><AiFillGithub className='icon'/></a>
                    <a href="https://linkedin.com" target="_blank"><AiFillLinkedin className='icon'/></a>
                </div>
                <div className='image-me trans'>
                    <img src={Me} alt="me" />
                </div>
            </div>
        </section>
    )
}