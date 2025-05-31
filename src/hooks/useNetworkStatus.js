import React, { useEffect, useState } from 'react'

const useNetworkStatus = () => {

  const [isonline, setIsonline]  = useState(navigator.onLine)
  


  useEffect(()=> {

    const setonline = ()=> {
      setIsonline(true)
    }

    const setoffline = ()=> {
      setIsonline(false)
    }

    window.addEventListener('online', setonline )
    window.addEventListener('offline', setoffline)


    return ()=> {
      window.removeEventListener('online', setonline)
      window.removeEventListener('offline', setoffline)
    }
   
  }, [])

  return isonline;


 }

export default useNetworkStatus