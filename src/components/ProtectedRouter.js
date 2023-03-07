import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../data/UserData'


const ProtectedRouter = ({children}) => {
    const {user} = UserAuth()

    if(!user){
        return <Navigate to={"./account"} />
    }



  return children
}

export default ProtectedRouter