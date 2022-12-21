import React from 'react';
import Header from "./components/header"
import Content from "./components/Content/content"
import Footer from "./components/footer"

export default function App(){
  return (
    <div className='container'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}