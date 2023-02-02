import {useState, useEffect} from 'react'
import {AiOutlineRight} from "react-icons/ai"
import Show from "../../elements/show"
import { movies } from "../../assets/movies"
import {MdNavigateNext} from "react-icons/md"
import {MdNavigateBefore} from "react-icons/md"
import { nanoid } from 'nanoid'
import "./topPicks.css"

function TopPicks() {

  const nr = 10
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(4)
  const [allMovies, setAllMovies] = useState<JSX.Element[]>(new Array(10).fill(null))

  function Before(){
    if(left === 0)
      setLeft(nr-1)
    else
      setLeft(val => val-1)
    if(right === 0)
      setRight(nr-1)
    else
      setRight(val => val-1)

    console.log(left)
    console.log(right)
    console.log(allMovies)
  }

  function After(){
    if(left === nr-1)
      setLeft(0)
    else
      setLeft(val => val+1)
    if(right === nr-1)
      setRight(0)
    else
      setRight(val => val+1)

      console.log(left)
      console.log(right)
      console.log(allMovies)
  }

  useEffect(() => {
    let Movies = []

    if(left > right){
      for(let i=left; i<nr; i++)
        Movies.push(<Show key={nanoid()} title={movies[i].title} rating={movies[i].rating} image={movies[i].poster} trailer_id={movies[i].trailer_id}/>)
      
      for(let i=0; i<=right; i++)
        Movies.push(<Show key={nanoid()} title={movies[i].title} rating={movies[i].rating} image={movies[i].poster} trailer_id={movies[i].trailer_id}/>)
    }

    else
      for(let i=left; i<=right; i++)
        Movies.push(<Show key={nanoid()} title={movies[i].title} rating={movies[i].rating} image={movies[i].poster} trailer_id={movies[i].trailer_id}/>)

    setAllMovies(Movies)
  }, [left, right])

  return (
    <div className='top-picks'>
      <div className='desc'>
        <h1>Top picks</h1>
        <AiOutlineRight className='el'/>
      </div>
      <h3>TV shows and movies just for you</h3>
      <div className='list'>
        <div className='navigation'>
          <MdNavigateBefore onClick={Before}/>
          <MdNavigateNext onClick={After}/>
        </div>
        {allMovies}
      </div>
    </div>
  )
}

export default TopPicks
