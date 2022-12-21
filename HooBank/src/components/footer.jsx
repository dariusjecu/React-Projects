import React from 'react'
import { logo, instagram, facebook, twitter, linkedin } from '../assets'

export default function Footer(){
    return (
        <div className='footer'>
            <div className='footer-links'>
                <div className='footer-logo'>
                    <img src={logo} alt="logo" />
                    <p>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className='all-footer-links'>
                    <div className='links-column'>
                        <h3>Usefull Links</h3>
                        <a href="#">Content</a>
                        <a href="#">How it Works</a>
                        <a href="#">Create</a>
                        <a href="#">Explore</a>
                        <a href="#">Terms & Services</a>
                    </div>
                    <div className='links-column'>
                        <h3>Community</h3>
                        <a href="#">Help Center</a>
                        <a href="#">Partners</a>
                        <a href="#">Suggestions</a>
                        <a href="#">Blog</a>
                        <a href="#">Newsletters</a>
                    </div>
                    <div className='links-column'>
                        <h3>Partner</h3>
                        <a href="#">Our Partner</a>
                        <a href="#">Become a Partner</a>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright 2022 HooBank. All Rights Reserved.</p>
                <div className='social-links'>
                    <img src={instagram} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />
                </div>
            </div>
        </div>
    )
}