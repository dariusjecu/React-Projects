import React, {useState, useEffect} from 'react'
import "./hero.css"
import {MdNavigateNext} from "react-icons/md"
import {MdNavigateBefore} from "react-icons/md"
import {BsPlayCircle} from "react-icons/bs"
import {IoIosCloseCircleOutline} from "react-icons/io"
import {movies} from "../../assets/movies.js"
import ModalVideo from "react-modal-video"

function Hero() {

  const [carousel, setCarousel] = useState(movies[0])
  const [carouselNr, setCarouselNr] = useState(0)
  const [isOpen, setOpen] = useState(false)

  function Before(): void{
    if(carouselNr === 0)
        setCarouselNr(movies.length-1)
    else
        setCarouselNr(val => val-1)
    setCarousel(movies[carouselNr])
  }

  function After(): void{
    if(carouselNr === movies.length-1)
        setCarouselNr(0)
    else
        setCarouselNr(val => val+1)
    setCarousel(movies[carouselNr])
  }

  return (
    <div className='hero' style={{backgroundImage: `url(${carousel.cover})`}}>
        <div className='navigation'>
            <MdNavigateBefore onClick={Before}/>
            <MdNavigateNext onClick={After}/>
        </div>
        <div className='fade'></div>
        <div className='content'>
            <img src={carousel.poster} />
            <div className='desc'>
                <BsPlayCircle className='play' onClick={() => setOpen(true)}/>
                { isOpen ?
                <div className='trailer'>
                    <iframe
                    className="modal__video-style"
                    loading="lazy"
                    width="1300"
                    height="800"
                    src={`https://www.youtube.com/embed/${carousel.trailer_id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <IoIosCloseCircleOutline style={{width: "3rem"}} className='close' onClick={() => setOpen(false)}/>
                </div> 
                : 
                <></>}
                <div>
                    <h1>{carousel.title}</h1>
                    <h2>Watch Trailer Here</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
