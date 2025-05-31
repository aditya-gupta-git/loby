import React from 'react'
import { images } from "../../constant/images";
import { useNavigate } from 'react-router-dom';



const TermsCondition = () => {

  const navigate = useNavigate()

  return (
    <div>
        <nav className='flex justify-between items-center p-2 pt-4 px-4 '>
            <div className="left-icon  text-white p-2 text-2xl rounded-full  "  
             style={{backgroundColor: "#33353B"}}
             onClick={()=> navigate(-1)}
            >
                <images.LeftIcon />
            </div>

            <h2 className='text-white text-2xl' >Terms & Conditions</h2>
            <h2></h2>
        </nav>

        <div className='text-white px-8 py-8 ' >
          <ol className='text-xl  ' >
            <li>1. Terms Of Use</li>
            <li>2. Privacy Policy</li>
            <li>3. EULA</li>
            <li>4. Refund Policy</li>
            <li>5. Loby Protection Period</li>
          </ol>
        </div>


    </div>
  )
}

export default TermsCondition