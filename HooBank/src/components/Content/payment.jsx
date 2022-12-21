import React from 'react';
import {apple, google, bill} from "../../assets/index"

export default function Payment(){
    return (
        <div className='payment margins'>
            <div className='payment-left'>
                <img src={bill} alt="bill" />
            </div>
            <div className='payment-right'>
                <h1>Easily control your billing & invoicing.</h1>
                <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <img src={apple} alt="apple" />
                <img src={google} alt="google" />
            </div>
        </div>
    )
}