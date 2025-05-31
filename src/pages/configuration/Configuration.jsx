import { GetAllConfiguration } from '@/Data/api/congfigurationApi';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const Configuration = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(GetAllConfiguration(gameid, categoryid ))
    })


  return (
    <div>    
        <h2>Configuration</h2>
   
      
        

    </div>
  )
}

export default Configuration