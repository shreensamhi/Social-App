import React from 'react'
import { formatPostDate } from '../Schema/FormateDate'
import { Link } from 'react-router-dom'

export default function PostHeader({name,image,date}) {
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
    <div className="absolute flex space-x-2 top-0 right-0 text-gray-600 dark:text-gray-300">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
</svg>
<svg
  className="w-5 h-5"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={2}
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M6 18L18 6M6 6l12 12"
  />
</svg>

  </div>
  </div>
    </>
  )
}
