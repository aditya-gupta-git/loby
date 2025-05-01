import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import VerifyOtp from './pages/verify-otp/VerifyOtp'
import Home from './pages/Home/Home'
import GameCategory from './pages/GameCategory/GameCategory'
import GameDetail from './pages/GameDetails/GameDetail'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/verifyOtp' element={<VerifyOtp/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/game/:id' element={<GameCategory />} />
          <Route path='/game-details/:id' element={<GameDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App