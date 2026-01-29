import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/dashboard'></Route>
          <Route path='/register'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
