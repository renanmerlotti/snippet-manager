import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard'></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
