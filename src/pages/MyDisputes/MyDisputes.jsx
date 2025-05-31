import React from 'react'
import { images } from '@/constant/images'
import { useNavigate } from 'react-router-dom'

const MyDisputes = () => {

    const navigate = useNavigate()

  return (
    <div>

        <nav className='flex items-center justify-between p-4' >
            <div 
            className="left-icon left-icon  text-white text-2xl p-2 rounded-full  "
            onClick={()=> navigate(-1) }
            style={{ backgroundColor: "#33353B" }}
            
            >
                <images.LeftIcon />
            </div>

            <h1 className='text-xl  text-green-400 ' >MyDisputes</h1>  
            <h2></h2>

        </nav>

        <div>
            <div className='flex px-14 justify-between w-full text-white ' >
                <h3>Open</h3>
                <h3>Closed</h3>
            </div>
            <hr className='mt-2 text-white' />
        </div>

    </div>
  )
}

export default MyDisputes