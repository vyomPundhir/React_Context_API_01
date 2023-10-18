// Isme data liya jayega

import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const {user} = useContext(UserContext)
  
  if(user) return <div>Welcome {user.username}</div>

  return <div>plz login</div>
}

export default Profile