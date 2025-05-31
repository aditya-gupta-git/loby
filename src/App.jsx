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
import ProfileUser from './pages/profileUser/ProfileUser.jsx'
import Chat from './pages/chatpage/Chat.jsx'
import AddToken from './pages/addtoken/AddToken.jsx'
import AddListing from './pages/AddListing/AddListing.jsx'
import Configuration from './pages/configuration/Configuration.jsx'
import TermsCondition from './pages/TermsCondition/TermsCondition.jsx'
import useNetworkStatus from './hooks/useNetworkStatus.js'
import Offline from './components/Ui/Offline.jsx'
import PaymentTransaction from './pages/PaymentTransaction/PaymentTransaction.jsx'
import MyDisputes from './pages/MyDisputes/MyDisputes.jsx'
import Feedback from './pages/Feedback/Feedback.jsx'
import AddListingUpload from './pages/AddlistingUploadImage/AddListingUpload.jsx'
import Mylistingdetail from './pages/MyListingDetail/Mylistingdetail.jsx'
import SingleChat from './pages/chatpage/SingleChat.jsx'

                         



const App = () => {   

  const isonline = useNetworkStatus()

  if(!isonline) return <Offline />
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verifyOtp' element={<VerifyOtp/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/game/:gameid' element={<GameCategory />} />
          <Route path='/game/:gameid/category/:id' element={<GameCategory />} /> 
          <Route path='/game-details/:id' element={<GameDetail />} />
          <Route path='/top-category/:id' element={<TopCategories />} />
          <Route path='/top-category/:gameId/detail/:categoryId' element={<TopCategoriesDetail />} />
          <Route path='/top-category/:gameId/listing/:id' element={<TopCategoriesListing />} />
          <Route path='/profile' element={<Profile />} /> 
          <Route path='/wallet' element={<Wallet /> } />   
          <Route path='/listings' element={<Mylisting />} />    
          <Route path='/listings/:gameid/:listing/:id' element={<Mylisting />} />    
          <Route path='/listings/detail/:id' element={<Mylistingdetail />} />    
          <Route path='/faqs' element={<Faq />} />
          <Route path='/profile/user/:id' element={<ProfileUser />} />
          <Route path='/chat' element={<Chat />} />
          <Route path="/chat/:id/" element={<SingleChat />} />
          <Route path='/add-token' element={<AddToken />} />
          <Route path='/Addlisting' element={<AddListing />} />
          <Route path='/Addlisting/image' element={<AddListingUpload />} />
          <Route path='/configuration' element= {<Configuration />} />
          <Route path='/terms' element= {<TermsCondition />} />
          <Route path='/transaction' element={<PaymentTransaction />} />
          <Route path='/disputes' element={<MyDisputes />} />
          <Route path='/feedback' element={<Feedback />} />

          <Route path='/search' element={<Search/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App