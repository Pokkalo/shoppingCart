import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserAuth } from '../data/UserData';

const Setting = () => {

  const {user, logout, logged} = UserAuth()


  // let nav = useNavigate();

  return (
    <div className='--pageSpace'>
      {logged === false ? 
     <h2>Please login</h2>:<h2> HI, {user.email}</h2>}
    </div>

  )
}
      //   <div className='--pageSpace'>
      //   This is {username}
      //   <button
      //     onClick={() => {
      //       nav("/account")
      //     }}
      //   >Change to account page</button>
      // </div>
export default Setting