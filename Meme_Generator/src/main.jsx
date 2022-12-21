import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import Header from "./components/header"
import Content from "./components/content"

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Header/>
    <Content/>
  </div>
)