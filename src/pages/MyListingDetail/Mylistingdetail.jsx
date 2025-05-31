import React, { useEffect } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom'
import { images } from '@/constant/images'
import { useDispatch, useSelector } from 'react-redux'
import { GetListingDetail } from '@/Data/api/myListingDetailApi'

const Mylistingdetail = () => {

    const navigate = useNavigate()
     
    const dispatch = useDispatch()
    const {id} = useParams()  

    useEffect(()=> {
        dispatch(GetListingDetail(id))

    },[dispatch, id])

    const  {listingdetailData: Listingdata }  = useSelector((state)=> state.listingdetail)
    console.log(Listingdata)

  return (
    <div>
         
        <nav className="flex justify-between items-center p-4 " >
            <div className="left-Icon  text-white p-2 text-2xl rounded-full  "  
            style={{ backgroundColor: "#33353B" }}
            onClick={()=> navigate(-1)}
            >
                <images.LeftIcon />
            </div>
        </nav>

        <div>
            <div>
                <h1>helo</h1>
                {Listingdata?.rows?.map((data)=> (
                    <div key={data.key}>
                     <p>{data.title}</p>
                     <p>{data.description}</p>
                    </div>
                ))} 
            </div>
        </div>

    </div>
  )
}

export default Mylistingdetail