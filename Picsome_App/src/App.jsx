import React, {useState, useEffect} from 'react'
import {Link, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import Icon from "../public/cart.png"

function App() {

  const [theme, setTheme] = useState("tropical")
  const [aux, setAux] = useState("tropical")
  const [search, setSearch] = useState(true)

  function GetData(event){
    setAux(event.target.value)
  }

  function SearchTopic(){
    setTheme(aux)
    console.log(theme)
  }

  return (
    <div className='container'>
      <header>
        <Link to="/"><h1>Pic Some</h1></Link>
        { search ?
          <div>
            <input type="text" placeholder='Category' onChange={GetData}/>
            <button onClick={SearchTopic}>Search</button>
          </div> : <></>
        }
        <Link to="/cart"><img src={Icon} /></Link>
      </header>

      <Routes>
        <Route exact path="/" element={<Home theme={theme} aux={aux} setSearch={setSearch} nrImages={10}/>}/>
        <Route path="/cart" element={<Cart setSearch={setSearch}/>}/>
      </Routes>
    </div>
  )
}

export default App
