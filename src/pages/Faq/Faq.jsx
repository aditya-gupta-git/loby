import React from 'react'
import { images } from "../../constant/images";
import { useNavigate } from 'react-router-dom';

const Faq = () => {

    const navigate = useNavigate();

  return (
    <div>
        {/* <h1>Faq</h1> */}     
        <nav className='flex items-center justify-between mt-4 px-4 '>
            <div className="left-icon left-icon  text-white text-2xl p-2 rounded-full " 
            style={{ backgroundColor: "#33353B" }}
            onClick={()=> navigate(-1)}
            
            >
                <images.LeftIcon />
            </div>

            <h2 className='text-2xl text-green-500'>FAQs</h2>
            <h2></h2>
        </nav>


    </div>
  )
}

export default Faq