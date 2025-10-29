import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode')=='true'||false);
  return (
    <>
      <div className={darkMode?"dark ":''}>
          <Outlet darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </>
  )
}
