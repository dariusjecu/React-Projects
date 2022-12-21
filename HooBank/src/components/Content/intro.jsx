import React from 'react';
import {discount, shadow, robot} from "../../assets/index"

export default function Intro(){
    return (
            <div className='intro margins'>
                <div className='intro-left'>
                    <div className='discount'>
                        <img className='shadow-intro' src={discount} alt="discount" />
                        <h3><span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</h3>
                    </div>
                    <h1>The Next <span className='text-gradient-color'><br/>Generation<br/></span> Payment Method.</h1>
                    <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                    We examine annual percentage rates, annual fees.</p>
                </div>
                <div className='intro-right'>
                    <img src={robot} alt="robot" />
                </div>
            </div>
    )
}