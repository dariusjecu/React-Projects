import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from "./components/header"
import {Content} from "./components/content"

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='container'>
    <Header/>
    <Content/>
  </div>
)