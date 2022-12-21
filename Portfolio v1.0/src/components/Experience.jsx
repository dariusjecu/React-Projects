import React from 'react'
import Skill from './elements/skill'
import Arrow from "../assets/arrow.png"
import React_Img from "../assets/react.png"
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Js from "../assets/js.png"
import Tailwind from "../assets/tailwind.png"
import Mysql from "../assets/mysql.png"
import Node from "../assets/node.png"
import Php from "../assets/php.png"

export default function Experience(){
  return (
    <div className='experience section-margins'>
      <div className='margins big'>
        <p>What Skills I Have</p>
        <h2>My Experience</h2>
      </div>
      <div className='frontend margins'>
        <div className='title-band'>
          <p className='title'>Frontend Development</p>
        </div>
        <div className='skills'>
          <Skill icon={Arrow} title="HTML" image={Html}/>
          <Skill icon={Arrow} title="CSS" image={Css}/>
          <Skill icon={Arrow} title="JavaScript" image={Js}/>
          <Skill icon={Arrow} title="Tailwind" image={Tailwind}/>
          <Skill icon={Arrow} title="React" image={React_Img}/>
        </div>
      </div>
      <div className='backend margins'>
        <div className='title-band'>
          <p className='title'>Backend Development</p>
        </div>
        <div className='skills'>
          <Skill icon={Arrow} title="Node JS" image={Node}/>
          <Skill icon={Arrow} title="PHP" image={Php}/>
          <Skill icon={Arrow} title="MySQL" image={Mysql}/>
        </div>
      </div>
    </div>
  )
}