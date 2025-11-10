import React from 'react'
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

export default function Navbar({setDarkMode ,darkMode}) {
const {isLoggedIn,setIsLoggedIn}  = useContext(AuthContext)
  const navigate = useNavigate();
  function logOut(){
    localStorage.removeItem('token');
    setIsLoggedIn(null)
    navigate('/login');
  }
  return (
    <>
    <nav className="shadow py-3 lg:px-0 px-2 bg-linear-to-r from-cyan-400 to-blue-600 text-white dark:from-gray-700 dark:to-black">
  <div className="container">
    <div className="flex justify-between items-center">

      <h1 className="font-bold text-lg">
        <Link to="/">Social Media</Link>
      </h1>

      <NavLink className="navLink" to="/profile">Profile</NavLink>
      

      <div className="flex items-center gap-4">

        {isLoggedIn ? (
          <NavLink
            onClick={logOut}
            className="hover:underline font-medium "
          >
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink to="/login" className="hover:underline">Sign in</NavLink>
            <NavLink to="/register" className="hover:underline">Sign up</NavLink>
          </>
        )}

        <div
          onClick={() => {
            setDarkMode(!darkMode);
            localStorage.setItem("darkMode", !darkMode);
          }}
          className="cursor-pointer"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
              strokeWidth="1.5" viewBox="0 0 24 24" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591
                M21 12h-2.25m-.386 6.364-1.591-1.591
                M12 18.75V21m-4.773-4.227-1.591 1.591
                M5.25 12H3m4.227-4.773L5.636 5.636
                M15.75 12a3.75 3.75 0 1 1-7.5 0 
                3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
              strokeWidth="1.5" viewBox="0 0 24 24" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1
                18 15.75c-5.385 0-9.75-4.365-9.75-9.75
                0-1.33.266-2.597.748-3.752A9.753
                9.753 0 0 0 3 11.25C3 16.635 7.365 21
                12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
        </div>

        

      </div>
    </div>
    
  </div>
</nav>

  
    </>
  )
}