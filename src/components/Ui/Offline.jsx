import { images } from '@/constant/images'
import React from 'react'

const Offline = () => {
  return (
    <div>
       <div className='h-screen w-full flex justify-center items-center flex-col '>

         <img src={images.offlineGif} alt="gif" className='w-60 h-60 ' />
         <p className='text-white px-10 py-4 text-xl text-center ' >Oops ! Looks like you have internet connectivity issues</p>
         <button className='border-1 px-16 bg-green-400 font-semibold mt-8 py-2 rounded-xl  ' >Retry</button>

       </div>
    </div>
  )
}

export default Offline