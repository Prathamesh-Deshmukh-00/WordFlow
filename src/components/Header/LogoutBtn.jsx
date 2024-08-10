import React from 'react'
import { useDispatch } from 'react-redux'
import { Logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch =useDispatch()
    const logoutHandler = () => {
        authService.logout.then(()=>{
            dispatch(Logout())
        })
    }
  return (
   <button className='inline-block px-6 duration-200 hover:bg-blue-100 rounded-full '>Logout</button>
  )
}

export default LogoutBtn
