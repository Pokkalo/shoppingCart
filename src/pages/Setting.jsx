import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Setting = () => {

  let nav = useNavigate();
  let {username} = useParams();

  return (
    <div className='--pageSpace'>
      This is {username}
      <button
        onClick={() => {
          nav("/account")
        }}
      >Change to account page</button>
    </div>
  )
}

export default Setting