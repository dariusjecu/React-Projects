import React from 'react';
import ReactDOM from 'react-dom/client'
import {Header} from "./components/header"
import {Intro} from "./components/intro"
import {Experiences} from "./components/experiences"

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='container'>
    <Header/>
    <Intro/>
    <Experiences/>
  </div>
)