import React from 'react';
import Header from "./components/header"
import Check from "./components/check"
import Gift from "./components/gift"
import Pay from "./components/pay"

function App() {
  return (
    <div className='container'>
      <Header/>
      <Gift/>
      <Check/>
      <Pay/>
    </div>
  )
}

export default App
