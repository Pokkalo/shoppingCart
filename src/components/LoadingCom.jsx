import React, {useState, useRef,useEffect, } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

function LoadingCom() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadingPage = async() =>{
            const testing = setTimeout(()=>{
                setLoading(false)
            }, 1000)
            await testing()
          }
          loadingPage()
    })

  return (
    <>
        {loading? 
        <div className='--pageSpace --loadingPage-entire mainbg w-100 d-flex justify-content-center align-items-center position-absolute' zIndex={999}>
            <ClimbingBoxLoader color="#8b622e"  loading={loading}/>
        </div>
        : null}
    </>
  )
}

export default LoadingCom