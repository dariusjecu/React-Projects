import React from 'react'
import Intro from './intro'
import Numbers from './numbers'
import Benefits from './benefits'
import Payment from './payment'
import Testimonials from './testimonials'
import GetStarted from './get-started'

export default function Content(){
    return (
        <div className='content'>
            <Intro/>
            <Numbers/>
            <Benefits/>
            <Payment/>
            <Testimonials/>
            <GetStarted/>
        </div>
    )
}