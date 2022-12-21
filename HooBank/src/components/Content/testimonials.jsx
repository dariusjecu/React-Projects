import React from 'react';
import {people01, people02, people03, airbnb, binance, coinbase, dropbox} from "../../assets/index"
import Testimonial from './testimonial';

export default function Testimonials(){
    return (
        <div className='testimonials'>
            <div className='testimonials-up'>
                <h1>What people are saying about us</h1>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className='all-testimonials'>
                <Testimonial name={"Herman Jensen"} comment={"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."} profile={people01} title={"Founder & Leader"}/>
                <Testimonial name={"Steve Mark"} comment={"Money makes your life easier. If you're lucky to have it, you're lucky."} profile={people02} title={"Founder & Leader"}/>
                <Testimonial name={"Kenn Gallagher"} comment={"It is usually people in the money business, finance, and international trade that are really rich."} profile={people03} title={"Founder & Leader"}/>
            </div>
            <div className='testimonials-bottom'>
                <img src={airbnb} alt="airbnb" />
                <img src={dropbox} alt="dropbox" />
                <img src={coinbase} alt="coinbase" />
                <img src={binance} alt="binance" />
            </div>
        </div>
    )
}