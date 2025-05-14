import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import VerifyOtp from './pages/verify-otp/VerifyOtp.jsx'
import Home from './pages/Home/Home.jsx'
import GameCategory from './pages/GameCategory/GameCategory.jsx'
import GameDetail from './pages/GameDetails/GameDetail.jsx'
// import Navbar from './components/Header/Header'  
import TopCategories from './pages/TopCategories/TopCategories.jsx'
import Search from './components/Ui/Search.jsx'
import TopCategoriesDetail from './pages/TopCategoriesDetails/TopCategoriesDetail.jsx'
import TopCategoriesListing from './pages/TopCategoriesListing/TopCategoriesListing.jsx'
import Profile from './pages/profile/Profile.jsx'
import Wallet from './pages/wallet/Wallet.jsx'
import Mylisting from './pages/mylisting/myListing'
import Faq from './pages/Faq/Faq.jsx'




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
          {/* <Route path='/listings' element={<Mylisting />} />    */}
          <Route path='/faqs' element={<Faq />} />

          <Route path='/search' element={<Search/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App