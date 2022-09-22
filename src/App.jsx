import { Suspense } from 'react'
import { MainRouter } from './router/MainRouter'
import { HorizontalLoader, NavBar } from './components'


import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <Suspense fallback={<HorizontalLoader/>}>
        <MainRouter/>
      </Suspense>
    </>
  )
}

export default App
