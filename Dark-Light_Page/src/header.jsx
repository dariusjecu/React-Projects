import React from 'react';

export default function Header(props){

    function Change(){
        props.setColor(val => {
            console.log(props.color.body)
            if(props.color.body == "white-content")
                {
                    document.body.classList.remove("white-content")
                    document.body.classList.add("dark-content")
                }
            else
                {
                    document.body.classList.remove("dark-content")
                    document.body.classList.add("white-content")
                }
            return {
                header: val.header == "white-header" ? "dark-header" : "white-header",
                body: val.body == "white-content" ? "dark-content" : "white-content",
                backImage: val.backImage == "back-image-light" ? "back-image-dark" : "back-image-light",
                toggle: val.toggle == "toggle-body-light" ? "toggle-body-dark" : "toggle-body-light",
                circle: val.circle == "circle-light" ? "circle-dark" : "circle-light"
            }
        })
    }

    return(
        <div className= {`header ${props.color.header}`}>
            <div className='logo'>
                <img src="../public/images/react-icon-small.png" />
                <h1>ReactFacts</h1>
            </div>
            <div className="toggle">
                <p>Dark</p>
                <div className={`toggle-body ${props.color.toggle}`} onClick={Change}>
                    <div className={`circle ${props.color.circle}`}></div>
                </div>
                <p>Light</p>
            </div>
        </div>
    )
}