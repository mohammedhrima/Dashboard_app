import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/list' element={<List />} />
      <Route path='/login' element={<Login />} />
      <Route path='/new' element={<New />} />
      <Route path='/single' element={<Single />} />
    </Routes>
  </div>
  )
}

export default App
