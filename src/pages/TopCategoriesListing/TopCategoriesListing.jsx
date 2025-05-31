import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTopCategoryList } from '../../Data/api/topCategoriesDetailApi'
import { useNavigate, useParams } from 'react-router-dom'
import { images } from '../../constant/images'
import DOMPurify from 'dompurify';

const TopCategoriesListing = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        dispatch(GetTopCategoryList(id)) 
    },[dispatch, id ])

    const {topcategorieslist: listingdata} = useSelector(state=> state.topcategoriesListing)


   
    const [updateddata, setUpdatedData] = useState(1)
   

  return (
    <div>

      <nav className='flex justify-between px-4 py-4 '>
        <div className="left text-white text-2xl p-2 rounded-full "
        style={{backgroundColor: "#33353B"}}
        onClick={()=> navigate(-1)}
        >
          <images.LeftIcon />
        </div>
      </nav>
      
      <div className='w-full text-center ' >
         
         <div>
          <img src={listingdata?.userGameServiceImages?.[0].path} alt="image" className='h-36 object-top rounded-xl w-full px-4 object-cover  ' />
         </div>
        

        <h2 className=' text-white text-xl py-4 '>{listingdata.title}</h2>

        <div className='flex justify-between px-4'>
          <button className='text-white px-2 rounded-lg ' style={{backgroundColor: "#FF754C"}}>{listingdata?.game?.name}</button>
          <button className=' px-4 rounded-lg text-white' 
          style={{backgroundColor: "#6C5DD3"}}
          >{listingdata?.category?.name}</button>
        </div>


        <div className=' mx-4 rounded-xl  py-4 mt-4  ' style={{backgroundColor: "#292B31"}}>
          <div className='flex justify-between px-4'>
            <h2 className='text-gray-500'>Unit Price</h2>
            <h2 className='text-green-500 text-2xl flex items-center gap-1 ' ><images.coinIcon className='text-yellow-500' /> {listingdata?.price}</h2>
          </div>

          <div className='flex justify-between px-4 '>
            <h2 className='text-gray-500'>Stock</h2>
            <h2 className='text-gray-300'>{listingdata?.stock_avl}</h2>
          </div>

          <div className='flex gap-4 justify-center '>
            <button onClick={()=> { if(updateddata > 1) {
              setUpdatedData(updateddata - 1)
            } } } className='text-white' >Decrease</button>
            <strong>{updateddata}</strong>  
            <button onClick={()=> setUpdatedData(updateddata + 1)} className='text-white' > Increase</button>
          </div>

          <div className='flex justify-between px-4 '>
            <h2 className='text-gray-500'>Total Token</h2>
            <h2 className='text-green-500 text-2xl flex items-center gap-1'>
               <images.coinIcon className='text-yellow-500' /> {listingdata?.price && updateddata ? listingdata.price * updateddata : 0 }</h2>
          </div>
        </div>

      </div>


      <div className='px-4 py-4 '>
        <p className='text-green-500 font-semibold'>Description</p> 
        <h2 className='text-gray-200'>{listingdata.title}</h2>

        <p className='text-green-500 font-semibold mt-4 '>Disclaimer</p> 
       <ol className="list-decimal ml-5 text-gray-300 mt-2 space-y-1 text-sm">
        {listingdata?.category?.disclaimer &&
        listingdata.category.disclaimer
       .replace(/<[^>]*>/g, '')             // Remove all HTML tags
       .replace(/\d+\.\s*/g, '')            // Remove numbers like "1. ", "2. "
       .split(/\n|\r|\./)                   // Split on periods or new lines
       .map(item => item.trim())
       .filter(Boolean)
       .map((point, i) => <li key={i}>{point}</li>)}
       </ol>

      </div>
        


    </div>
  )
}

export default TopCategoriesListing