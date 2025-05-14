import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import VerifyOtp from './pages/verify-otp/VerifyOtp'
import Home from './pages/Home/Home'
import GameCategory from './pages/GameCategory/GameCategory'
import GameDetail from './pages/GameDetails/GameDetail'
// import Navbar from './components/Header/Header'  
import TopCategories from './pages/TopCategories/TopCategories'
import Search from './components/Ui/Search'
import TopCategoriesDetail from './pages/TopCategoriesDetails/TopCategoriesDetail'
import TopCategoriesListing from './pages/TopCategoriesListing/TopCategoriesListing'
import Profile from './pages/profile/Profile'
import Wallet from './pages/wallet/Wallet'
import Mylisting from './pages/mylisting/myListing'



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
          <Route path='/top-category/:id' element={<TopCategories />} />
          <Route path='/top-category/:gameId/detail/:categoryId' element={<TopCategoriesDetail />} />
          <Route path='/top-category/:gameId/listing/:id' element={<TopCategoriesListing />} />
          <Route path='/profile' element={<Profile />} /> 
          <Route path='/wallet' element={<Wallet /> } />   
          <Route path='/listings' element={<Mylisting />} /> 

          <Route path='/search' element={<Search/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App