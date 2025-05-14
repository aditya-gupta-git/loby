import React, { useEffect } from 'react'
import { images } from '../../constant/images'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetWallet } from '../../data/api/profileApi'


const Wallet = () => {

    const dispatch = useDispatch()


    const navigate = useNavigate()

    useEffect(()=> {
       dispatch(GetWallet())
    },[dispatch])

    const data =  useSelector(state=> state.profile.WalletData )


  return (
    <div>
       

        <div>
            <nav className='flex justify-between items-center px-6 pt-4 ' >
                <div className="left-icon text-white p-2 text-2xl rounded-full  "
                  style={{ backgroundColor: "#33353B" }}
                  onClick={()=> navigate(-1)}
                >
                    <images.LeftIcon />
                </div>

                <h1 className='text-green-400 text-2xl'>Wallet</h1>
                <h2></h2>
            </nav>

            <div>
                <div className='mx-8 mt-4 text-white  text-center pt-4 rounded-2xl  '
                  style={{backgroundColor: "#00FF62"}}
                >
                    <h2 className='text-black'>Loby Token Balance</h2>
                    <div className=' rounded-2xl  py-10 mt-4 text-center '
                     style={{backgroundColor: "#373A43"}}
                    >
                        <div  className='flex items-center justify-center'>
                        <images.coinIcon className='text-yellow-400 text-2xl' />
                        <h2 className='text-4xl font-bold text-green-500 '>{data?.data?.totalEarning}.00</h2>
                        </div>
                        <button className=' rounded-lg px-8 py-2 mt-4 '
                        style={{backgroundColor: "#6C5DD3"}}
                        >Add Token</button>
                    </div>
                </div>


                <div className='mx-8 text-white text-center  mt-4 pt-4 rounded-2xl '
                  style={{backgroundColor: "#00FF62"}}
                >
                    <h2 className='text-black'>Your Earnings</h2>
                    <div className=' rounded-2xl py-10 mt-4 text-center ' 
                      style={{backgroundColor: "#373A43"}}
                    >
                          <div className='flex items-center justify-center'>
                          <images.coinIcon className='text-yellow-400 text-2xl' />
                          <h2 className='text-4xl font-bold text-green-500 '>{data?.data?.totalEarning}.00</h2>
                          </div>
                          <button className=' rounded-lg px-8 py-2 mt-4 '
                          style={{backgroundColor: "#D82F0E"}}
                           >Withdraw</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Wallet