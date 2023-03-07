import React,{useState, useEffect} from 'react'

const LoadingPage = () => {

    const [loading, setLoading] = useState(false) 

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 8000)
    }, [])

  return (
    <div>
        {
            loading? 
            
                <ClimbingBoxLoader color="#36d7b7" size={30} loading={loading}/>:
                null
        }
    </div>
  )
}

export default LoadingPage