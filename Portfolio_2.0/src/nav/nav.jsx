import React, {useState} from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {VscFileSubmodule} from "react-icons/vsc"
import {BsJournalBookmark} from "react-icons/bs"
import {MdConnectWithoutContact} from "react-icons/md"
import {TfiBrushAlt} from "react-icons/tfi"
import {AiOutlineClose} from "react-icons/ai"

export default function Nav(){

    const [select, setSelect] = useState("#")
    const [brush, setBrush] = useState(false)

    function Change(event){
        if(brush == true)
        {
            document.getElementById("background").classList = "background rev"
            setTimeout(() => {
                setBrush(val => !val)
            }, 500);
        }
        else
            setBrush(val => !val)
    }
    
    function ChangeColor(event){
        document.documentElement.style.setProperty('--main-color',event.target.style.background);
        if(event.target.style.color)
            document.documentElement.style.setProperty('--el-color',event.target.style.color);
        let aux = JSON.stringify(event.target.style.background)
        aux = aux.slice(5, aux.length-2)
        document.documentElement.style.setProperty('--main-color-blur',aux);
    }

    return (
        <div className='header'>
            <nav className='container trans'>
                <a href="#" onClick={() => {setSelect("#")}}><AiOutlineHome className={select == "#" ? 'icon selected' : "icon"}/></a>
                <a href="#about" onClick={() => {setSelect("#about")}}><AiOutlineUser className={select == "#about" ? 'icon selected' : "icon"}/></a>
                <a href="#experience" onClick={() => {setSelect("#experience")}}><VscFileSubmodule className={select == "#experience" ? 'icon selected' : "icon"}/></a>
                <a href="#portfolio" onClick={() => {setSelect("#portfolio")}}><BsJournalBookmark className={select == "#portfolio" ? 'icon selected' : "icon"}/></a>
                <a href="#contact" onClick={() => {setSelect("#contact")}}><MdConnectWithoutContact className={select == "#contact" ? 'icon selected' : "icon"}/></a>
            </nav>
            <div className='color-brush'>
                    {brush == false ? <TfiBrushAlt id='brush' onClick={Change} className='icon brush animation'/>
                    :                 <AiOutlineClose id='close' onClick={Change} className="icon brush animation"/>
                    }
            </div>
            {brush == true ?
                <div id='background' className='background animation'>
                    <div className='theme'>
                        <h3>Change Theme Color</h3>
                        <div>
                            <p style={{background: "#a54227"}} onClick={ChangeColor}></p>
                            <p style={{background: "#848FA5"}} onClick={ChangeColor}></p>
                            <p style={{background: "#FF82A9"}} onClick={ChangeColor}></p>
                            <p style={{background: "#517959"}} onClick={ChangeColor}></p>
                            <p style={{background: "#FB8B24"}} onClick={ChangeColor}></p>
                        </div>
                    </div>
                </div>
            : <></>
            }
        </div>
    )
}