import React from 'react'
import { formatPostDate } from '../Schema/FormateDate'
import user from '../assets/user.png'
import { Link } from 'react-router-dom'


export default function PostComments({photo,name,date,content}) {
  return (
    <>
        <div className="flex items-center">
    <div>
      <img alt='' className="w-10 h-10 rounded-full" onError={(e)=>e.target.src=user} src={photo}/>
    </div>
    <div className="ml-2 ">
  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
  <Link className="font-semibold text-gray-900 dark:text-white cursor-pointer">
    {name}
  </Link>

  <span className="text-gray-400">•</span>

  <span>
    {formatPostDate(date)}
  </span>
</div>

  <p className='text-gray-700 dark:text-gray-200'>{content}</p>
    </div>
  </div>
    </>
  )
}
