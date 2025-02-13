import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout as authLogout } from '../../store/authSlice'

function LogoutBtn(){
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(authLogout())
        })
    }
    return (
        <button
        className='inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn