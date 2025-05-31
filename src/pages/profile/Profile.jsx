import React, { useEffect } from 'react'
import { GetProfileData } from '../../Data/api/profileApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../Data/redux/slices/authSlice'
import { images } from '../../constant/images'

const menuitems = [
  {label: 'My wallet', path: '/wallet'}, 
  {label: 'My listings', path: '/listings'}, 
  {label: 'My Orders', path: '/orders'}, 
  {label: 'My Disputes', path: '/disputes'}, 
  {label: 'My time Slots', path: '/time-slot'}, 
  {label: 'Profile Verification', path: '/profile-verification'}, 
  {label: 'PG Transaction', path: '/transaction'}, 
  {label: 'Feedback/Suggestion', path: '/feedback'}, 
  {label: 'FAQ', path: '/faqs'}, 
  {label: 'Terms & Condition', path: '/terms'}, 
  {label: 'Settings', path: '/settings'}, 
  {label: 'Chat with us', path: '/chat'},
  {label: 'Logout', path: '/login'}, 
]

const Profile = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=> {
    dispatch(GetProfileData())
  }, [dispatch])


  const { ProfileData: data, loading: startloading } = useSelector((state) => state.profile);

  const isloggedIn = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isloggedIn)
  

  function Add (id) {
    // alert("Hello") 
    console.log("Id : ", id)
    navigate(`/profile/user/${id}`)
  }

  return (
    <div className='p-6'> 

        <nav className='flex justify-between  '>
           <div className="left-icon  text-white text-2xl p-2 rounded-full  "  
            style={{ backgroundColor: "#33353B" }}
            onClick={() => navigate(-1)}
            >
             <images.LeftIcon />
           </div>
        </nav>

       
        <div className='flex w-1/2  items-center gap-2 pt-6  '
          onClick={()=>Add(data.id)}
         >
          <img src={data?.image} alt="profile-image" className='w-22 h-22  object-cover rounded-full border-2 border-green-500 ' /> 
          <div>
          <h2 className='text-3xl text-white  ' >{data?.name}</h2>
          <h2 className='text-xs mt-2 text-white  '>View Profile</h2>
          </div>

        </div>

       <div className='mt-6 '>
       {menuitems.length > 0 ? (
           menuitems.map((items, index)=> (
            <div 
             key={index}
             onClick={()=> {
              if(items.path === '/logout'){
                navigate('/')
                localStorage.removeItem('token')
                dispatch(logout())
              }
               else{
                navigate(items.path)
              
             }
             }  }

             >
              <h2 className='text-2xl mt-2 px-4 text-gray-200  '>{items.label}</h2>
            </div>
   

           ))
        ) : 
        (
          <p>No Data Present </p>

        ) }

       </div>

    </div>
  )
}

export default Profile