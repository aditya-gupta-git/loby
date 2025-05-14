import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTopCategoryList } from '../../data/api/topCategoriesDetailApi'
import { useNavigate, useParams } from 'react-router-dom'
import { images } from '../../constant/images'

const TopCategoriesListing = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        dispatch(GetTopCategoryList(id))
    },[dispatch, id ])

    const {topcategorieslist: listingdata} = useSelector(state=> state.topcategoriesListing)

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
        

        <h2 className=' text-white text-xl '>{listingdata.title}</h2>

        <div className='flex justify-between px-4'>
          <h2>{listingdata?.game?.name}</h2>
          <h2>{listingdata?.category?.name}</h2>
        </div>


        <div className='border-1 mx-4 rounded-lg bg-gray-8x`00'>
          <div className='flex justify-between px-4'>
            <h2>Unit Price</h2>
            <h2>{listingdata?.price}</h2>
          </div>

          <div className='flex justify-between px-4 '>
            <h2>Stock</h2>
            <h2>{listingdata?.stock_avl}</h2>
          </div>

          <div className='flex justify-between px-4 '>
            <h2>Total Token</h2>
            <h2>{listingdata?.price}</h2>
          </div>
        </div>

      </div>
        


    </div>
  )
}

export default TopCategoriesListing