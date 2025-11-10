import React, { useState } from 'react'
import user from '../assets/user.png'
import { addCommentApi } from '../Services/CommentsServices';

export default function AddComments({setComment ,postId}) {
  const [loading, setLoading] = useState(false);
  const [addComment, setAddComment] = useState('');
  async  function addComments(){
        setLoading(true);
      const response = await  addCommentApi(addComment , postId);
      if(response.message){
        setComment(response.comments)
        setLoading(false);
        setAddComment('')
      }  
    }
  return (
    <>
      <div className="flex items-center py-3 -mx-3 p-2">
        <img className="size-8 rounded-full" src={user} alt="" />
      
        <textarea
          name="body"
          placeholder="Write a comment..."
          value={addComment}
          onChange={(e) => setAddComment(e.target.value)}
          className="resize-none w-full mx-2 rounded-full border bg-white dark:bg-gray-800 
                     border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 
                     h-8 px-3 pt-2 text-xs"
        />
      
        {addComment.length >= 3 && (
          loading ? 
            <svg
              className="size-6 text-blue-600 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
           : 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={addComments}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-blue-600 cursor-pointer transition-transform duration-200 hover:scale-110"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          
        )}
      </div>
    </>
  )
}
