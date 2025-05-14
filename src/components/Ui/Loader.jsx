import React, { useState } from 'react'
import { BarLoader } from 'react-spinners'

const Loader = ({loading = true, color = "#36d7b7", width = 150}) => {

  return (
    <div className='h-screen w-full flex items-center justify-center'>

        <BarLoader loading={loading} color={color} width={width}/>
    </div>
  )
}

export default Loader