import React from 'react'
import meme from "./data"

export default function Content(){

    const MemeArray = meme.data.memes;
    let randomNr = Math.floor(Math.random() * MemeArray.length);
    let url = MemeArray[randomNr].url;

    const [element, setImage] = React.useState({
            upper: "",
            bottom: "",
            image: url
    })

    function handleOnClick(){
        randomNr = Math.floor(Math.random() * MemeArray.length);
        url = MemeArray[randomNr].url;
        setImage(oldValue => {
            return {
                ...oldValue,
                image: url
            }
        })
    }

    function Change(event)
    {
        setImage(oldValue => {
            return {
                ...oldValue,
                [event.target.name]: event.target.value
            } 
        })
    }

    return (
        <div className='content'>
            <input type="text" placeholder='Upper Line' onChange={Change} name="upper" />
            <input type="text" placeholder='Bottom Line' onChange={Change} name="bottom" />
            <button onClick={handleOnClick}>Get a new meme image</button>
            <img id='image' src={element.image}/> 
            <h2 className='text1'>{element.upper}</h2>
            <h2 className='text2'>{element.bottom}</h2>
        </div>
    )
}