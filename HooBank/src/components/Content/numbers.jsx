import React from 'react';
import Number from './number';

export default function Numbers(){

    const index = false

    return (
        <div className='numbers margins'>
            <Number title={"3800+"} desc={"USER ACTIVE"} index={!index} />
            <Number title={"230+"} desc={"TRUSTED BY COMPANY"}/>
            <Number title={"230M+"} desc={"TRANSACTION"}/>
        </div>
    )
}