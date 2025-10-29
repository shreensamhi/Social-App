import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({setDarkMode ,darkMode}) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className='shadow py-3 lg:px-0 px-2 bg-sky-400 text-white dark:bg-gray-600'>
        <div className="container">
          <div className='flex justify-between items-center'>
          <h1> <Link to={'/'}>TAIL</Link></h1>
        <div className="lg:w-1/3 order-first lg:order-0">
          <ul className='lg:flex hidden justify-between'>
            <li ><NavLink className='navLink' to={''}>Home</NavLink></li>
            <li><NavLink className='navLink' to={'about'}>About</NavLink></li>
            <li ><NavLink className='navLink' to={'gallery'}>Gallery</NavLink></li>
            <li ><NavLink className='navLink' to={'contact'}>Contact</NavLink></li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setMenu(!menu)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:hidden cursor-pointer size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div onClick={()=>{setDarkMode(!darkMode) ; localStorage.setItem('darkMode',!darkMode)}} >
{darkMode ?   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /> </svg> 
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /> </svg>
}</div>
    
        </div>
        {menu && <ul className='lg:hidden space-y-3 mt-3'>
            <li ><NavLink className='navLink' to={''}>Home</NavLink></li>
            <li ><NavLink className='navLink' to={'about'}>About</NavLink></li>
            <li><NavLink className='navLink' to={'gallery'}>Gallery</NavLink></li>
            <li ><NavLink className='navLink' to={'contact'}>Contact</NavLink></li>
          </ul>}
        </div>
      </nav>
  
    </>
  )
}