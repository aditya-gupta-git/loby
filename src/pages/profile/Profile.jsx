import React, { useEffect } from 'react'
import { GetProfileData } from '../../Data/api/profileApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const menuitems = [
  { label: 'My wallet', path: '/wallet'}, 
  {label: 'My listings', path: '/listings'}, 
  {label: 'My Orders', path: '/orders'}, 
  {label: 'My Disputes', path: '/disputes'}, 
  {label: 'My time Slots', path: '/time-slot'}, 
  {label: 'Profile Verification', path: '/profile-verification'}, 
  {label: 'PG Transaction', path: '/transaction'}, 
  {label: 'Feedback/Suggestion', path: '/feedbacl'}, 
  {label: 'FAQ', path: '/faqs'}, 
  {label: 'Terms & Condition', path: '/terms'}, 
  {label: 'Settings', path: '/settings'}, 
  {label: 'Logout', path: '/logout'}, 
]

const Profile = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=> {
    dispatch(GetProfileData())
  }, [dispatch])


  const { ProfileData: data, loading: startloading } = useSelector((state) => state.profile);

  return (
    <div className='p-6'> 

       
        <div className='flex  items-center gap-2'>
          <img src={data?.image} alt="profile-image" className='w-24 h-24  object-cover rounded-full border-2 border-green-500 ' /> 
          <div>
          <h2 className='text-3xl text-white  ' >{data?.name}</h2>
          <h2 className='text-xs mt-2 text-white  '>View Profile</h2>
          </div>

        </div>

       <div className='mt-12 '>
       {menuitems.length > 0 ? (
           menuitems.map((items, index)=> (
            <div 
             key={index}
             onClick={()=> navigate(items.path)}

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