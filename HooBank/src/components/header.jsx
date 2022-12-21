import React, {useState, useEffect} from 'react'
import {Link, Route, Routes} from "react-router-dom"
import { logo, menu, close } from '../assets/index.js'
import Content from "./Content/content"

export default function Header(){

    const [scrolled, setScrolled] = useState(0)
    const [size, setSize] = useState(window.innerWidth)
    const [openMenu, setOpenMenu] = useState(false)

    function Scroll(event){
        const {id} = event.target
        const scroll = id == "intro" ? 0 : document.getElementsByClassName(`${id}`)[0].offsetTop - 175
        window.scrollTo({top: scroll, behavior: "smooth"})
        setOpenMenu(false)
    }

    function ChangeScroll(){
        setScrolled(window.scrollY)
    }

    function ChangeSize(){
        setSize(window.innerWidth)
    }

    function OpenMenu(event){
        setOpenMenu(val => !val)
        console.log(event.target.className)
        event.target.className = openMenu ? "menu" : "close"
    }

    useEffect(() => {
        window.addEventListener("resize", ChangeSize)
        window.addEventListener("scroll", ChangeScroll);
        return () => window.removeEventListener("scroll", ChangeScroll);
    }, []);

    return (
        <div className={scrolled == 0 ? 'header' : 'header header-scrolled'}>
                <Link to="./"><img onClick={Scroll} id="intro" src={logo} alt="logo" /></Link>
                <div className='nav-menu'> 
                        {size < 1101 ? <img className={openMenu ? "close" : "menu"} onClick={OpenMenu} src={openMenu ? close : menu} alt="menu" /> : <></>} 
                            <div className={size < 1101 && openMenu == false ? "nav-links" : size < 1301 && openMenu ? "nav-links nav-links-display" : "header-links"}>
                                <ul>
                                    <li><Link onClick={Scroll} id="intro" to="./intro">Intro</Link></li>
                                    <li><Link onClick={Scroll} id="benefits" to="./benefits">Benefits</Link></li>
                                    <li><Link onClick={Scroll} id="payment" to="./payment">Payment</Link></li>
                                    <li><Link onClick={Scroll} id="testimonials" to="./testimonials">Testimonials</Link></li>
                                    <li><Link onClick={Scroll} id="footer" to="./footer">Try Now!</Link></li>
                                </ul>
                            </div>
                </div>
                <Routes>
                    <Route exact path='./' element={<Content/>}/>
                    <Route path='./intro' element={<Content/>}/>
                    <Route path='./benefits' element={<Content/>}/>
                    <Route path='./payment' element={<Content/>}/>
                    <Route path='./testimonials' element={<Content/>}/>
                </Routes>
        </div>
    )
}