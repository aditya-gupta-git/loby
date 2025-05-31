import { GetTopCategories } from '@/Data/api/topCategoriesApi'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const GameListCategory = () => { 

    const dispatch = useDispatch()
    

    useEffect(()=> {
       dispatch(GetTopCategories())
    }, [])


  return (
    <div>GameListCategory</div>
  )
}

export default GameListCategory