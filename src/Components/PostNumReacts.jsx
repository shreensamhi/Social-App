import React from 'react'
import { Link } from 'react-router-dom'

export default function PostNumReacts({num , postId}) {
  return (
    <>
      <div className='flex justify-between text-gray-600 dark:text-gray-300 mt-2'>
  <div className=" p-2 -mx-3 flex">
   <div className="bg-blue-500 z-10 size-5 rounded-full flex items-center justify-center ">
            <svg className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
        </div>
        <div className="bg-red-500 size-5 rounded-full flex items-center justify-center -ml-1">
            <svg  className="w-3 h-3 fill-current stroke-current text-white" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
    <span className="text-xs text-gray-500 ms-1 text-blue cursor-pointer hover:underline">
      <Link to={'/post-details/'+postId}>
      You and {num} others
      </Link>
    </span>
    </div>
    <p className="ml-3 text-gray-500 cursor-pointer"><Link to={'/post-details/'+postId}>{num} comment</Link></p>
  </div>
    </>
  )
}
