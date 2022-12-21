import React from 'react';
import LogoImg from "../../public/img/airbnb-logo.png"

function Header(){
    return (
        <div className="header">
            <img src={LogoImg}/>
        </div>
    )
}

export {Header}