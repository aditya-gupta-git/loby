import React from 'react'
import { images } from '@/constant/images'
import { useNavigate } from 'react-router-dom'
  
 
const Feedback = () => {


    const navigate = useNavigate()

  return (
    <div>

        <nav className='flex justify-between items-center p-3 ' >
            <div className="left-Icon  text-white text-2xl p-2 rounded-full "
            style={{ backgroundColor: "#33353B" }}
            onClick={()=> navigate(-1)}
            >
                <images.LeftIcon />
            </div>
            
            <h1 className='text-green-400 text-lg ' >Feedback/Suggestions</h1>     
            <h2></h2>
  
        </nav>

        
        <div>
            <div className=' mx-4 rounded-md mt-4 ' >
                <input type="text"
                 className="w-full border  rounded-lg px-4 pb-28 pt-2 text-gray-500 focus:border-green-400 outline-none font-semibold" 
                 style={{backgroundColor: "#2B2E36"}}
                 placeholder='Type your feedback & suggestions for us to improve. 
                 You can also sugegstion new features you want to see ' />
                 
                 <label className='text-md mt-4 text-gray-500' >Email</label>
                 <input type="text" placeholder='We will get in touch with you on this email' className='mt-4 w-full rounded-md  py-2.5 px-2 text-gray-400 border border-transparent focus:border-green-500 outline-none '
                 style={{backgroundColor:"#2B2E36"}} />
            </div>

            <div className='flex justify-between px-4 mt-14 '>
                <button className='px-16 rounded-xl border-red-400 text-red-400  py-2 border-1 ' >Clear</button>
                <button className='px-16 rounded-xl bg-green-500 text-black  py-2 border-1 ' >Submit</button>
            </div>

        </div>

    </div>
  )
}

export default Feedback