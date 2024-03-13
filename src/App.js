import React from 'react'
import { CTA,Brand,Navbar } from './components'
import { Header,Footer,Possiblity,Blog,WhatGpt3,Features } from './container'
import './App.css'
import './index.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Possiblity/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
