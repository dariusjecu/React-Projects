import React from 'react';
import data from "./Data"
import Rate from "../../public/img/star.png"

function Experiences(){
    const HtmlData = data.map((element) => {
        return (
                <Experience 
                    status = {element.status}
                    img = {element.img}
                    reviews = {element.reviews}
                    country = {element.country}
                    desc = {element.desc}
                    price = {element.price}
                />
        )
    })
    return (
        <div className='experiences'>
            {HtmlData}
        </div>
    )
}

function Experience(element){
    return (
            <div className="experience">
                <p>{element.status}</p>
                <img className='image' src={element.img}/>
                <div className="in-line">
                    <img src={Rate}/>
                    <p>({element.reviews})</p>
                    <p>-{element.country}</p>
                </div>
                <p>{element.desc}</p>
                <p><span>From ${element.price}</span> / person</p>
            </div>
    )
}


export {Experiences}