import React, { useContext, useState } from 'react'
import { formatPostDate } from '../../Schema/FormateDate'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

export default function PostHeader({name,image,date,UserId ,deletePost,loadingDeletePost,setIsEditing}) {
const {userData}= useContext(AuthContext);
const [open, setOpen] = useState(false);
  return (
    <>
        <div className="relative flex items-center">

      <img alt='' className="w-10 h-10 rounded-full" src={image}/>
    
    <div className="ml-2">
      <h5 className='cursor-pointer dark:text-gray-100'>
      <Link>{name}</Link>
      </h5>
      <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
        {formatPostDate(date)}
      </p>
    </div>
     {userData._id === UserId && <div className="absolute flex space-x-2 top-0 right-0 text-gray-600 dark:text-gray-300">
<svg  onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 cursor-pointer">
  <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
</svg>
 {open && (
          <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-xl rounded-md p-2 z-20">
            <button
              onClick={() => {
                setOpen(false);
                setIsEditing(true);
              }}
              className="block w-full text-left px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              Edit
            </button>
            </div>)
            }
{loadingDeletePost ?   <svg className="animate-spin size-4 text-red-500" viewBox="0 0 24 24" >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                : <svg
  className="size-5 cursor-pointer"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={2}
  onClick={deletePost}
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M6 18L18 6M6 6l12 12"
  />
</svg>}


  </div>} 
  </div>
    </>
  )
}
