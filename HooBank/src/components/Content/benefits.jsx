import React from 'react';
import {star, shield, send} from "../../assets/index"
import Benefit from './benefit';

export default function Benefits(){
    return (
        <div className='benefits margins'>
            <div className='benefits-left'>
                <h1>You do the business, we’ll handle the money.</h1>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button>Get Started</button>
            </div>
            <div><p className='shadow-box'></p></div>
            <div className='benefits-right'>
                <Benefit img={star} title={"Rewards"} desc={"The best credit cards offer some tantalizing combinations of promotions and prizes."}/>
                <Benefit img={shield} title={"100% Secured"} desc={"We take proactive steps make sure your information and transactions are secure."}/>
                <Benefit img={send} title={"Balance Transfer"} desc={"A balance transfer credit card can save you a lot of money in interest charges."}/>
            </div>
        </div>
    )
}