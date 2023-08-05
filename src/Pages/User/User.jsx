import React from 'react'
import './User.scss'
import Single from '../Single/Single'
import { singleUser } from '../../Data/Data'

const User = () => {

  // FETCH DATA AND PASS TO SINGLE COMPONENT
  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}

export default User