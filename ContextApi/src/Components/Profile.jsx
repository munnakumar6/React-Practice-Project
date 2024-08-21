import React, { useContext } from 'react'
import createuser from '../Context/Usercontext'

function Profile() {
  const {user} = useContext(createuser)
  
  if(!user) return <span><h2>Please Login </h2></span>


return (
    <p>
    <h1>Welcom {user.username}</h1>
    <h2>Your Mobile no {user.mobile}</h2>
    <h2>You Login Successful....!</h2>
    </p>
  )
 
  
}

export default Profile