import React ,{useState} from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function MainLayout() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode')=='true'||false);
  return (
    <>
    <div className={darkMode?"dark":""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className='min-h-screen py-4 bg-gray-100 dark:bg-gray-900'>
      <Outlet darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </>
  )
}
