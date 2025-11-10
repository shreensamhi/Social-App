import { useState } from 'react'
import PostBody from './PostBody'
import PostHeader from './PostHeader'
import PostReacts from './PostReacts'
import PostComments from './PostComments'
import PostNumReacts from './PostNumReacts'
import AddComments from './AddComments'
export default function PostCard({post ,commentLength}) {
  const [comment, setComment] = useState(post.comments);
  
  return (
    <>
      <div className="bg-white rounded-md dark:bg-gray-900 dark:text-gray-100 shadow-2xl shadow-cyan-100 mt-4 p-3 relative transition-colors duration-300">
        <PostHeader name={post.user.name} date={post.createdAt} image={post.user.photo} />
        <PostBody body={post.body} image={post.image}/>
        <PostNumReacts num={comment.length} postId={post.id}/>
        <PostReacts/>
      <AddComments  setComment={setComment} postId={post.id}/>
        <div className='space-y-4'>
        {comment.length > 0 && comment.slice(0,commentLength).map((comment)=><PostComments name={comment.commentCreator.name} key={comment._id} photo={comment.commentCreator.photo} date={comment.createdAt} content={comment.content}/>)}
        </div>
      </div>
    </>
  )
}
