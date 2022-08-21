import { useState } from 'react'
import NavBar from './components/NavBar'
import {Route, Routes} from "react-router-dom"
import ListTodo from "./components/ListTodo"


import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <div className='h-center p-r'>
        <Routes>
          <Route path='/' element={<ListTodo/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
