import { useState } from 'react'
import { MainRouter } from './router/MainRouter'
import { NavBar } from './components'

import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <MainRouter/>
    </>
  )
}

export default App
