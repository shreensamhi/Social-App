import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';

export default function AuthLayout() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode')=='true'||false);
  return (
    <>
      <div className={darkMode?"dark ":''}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Outlet darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </>
  )
}
