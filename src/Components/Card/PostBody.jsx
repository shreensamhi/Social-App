import React from 'react'

export default function PostBody({body,image}) {
  return (
    <>
        {body && <p className='mt-4 dark:text-gray-200 wrap-break-word'>{body}</p>}
  {image && <img src={image} alt={body} className='object-cover position-center w-full h-75 mt-3'/>}

    </>
  )
}
