import React from 'react'
import Header from "./header"
import Content from "./content"

export default function App(){

    const [color,setColor] = React.useState({
        header: "dark-header",
        body: "dark-content",
        backImage: "back-image-dark",
        toggle: "toggle-body-dark", 
        circle: "circle-dark"
    })
    
    return(
        <div className='container'>
            <Header color={color} setColor={setColor}/>
            <Content color={color} setColor={setColor}/>
        </div>
    )
}


