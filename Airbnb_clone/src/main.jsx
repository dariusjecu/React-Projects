import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from "./Header"
import Description from "./Description"
import Card from "./Card"
import Photo from "./images/katie-zaferes.png"

let root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
      <Header/>
      <Description/>
      <div className='roller'>
        <Card
          img={Photo}
          rating="5.0"
          nr_reviews="6"
          text="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img={Photo}
          rating="5.0"
          nr_reviews="6"
          text="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img={Photo}
          rating="5.0"
          nr_reviews="6"
          text="Life lessons with Katie Zaferes"
          price="136"
        />
      </div>
    </>
)
