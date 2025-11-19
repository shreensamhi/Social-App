import { useState } from 'react'
import PostBody from './Card/PostBody'
import PostHeader from './Card/PostHeader'
import PostReacts from './Card/PostReacts'
import PostComments from './Card/PostComments'
import PostNumReacts from './Card/PostNumReacts'
import AddComments from './Card/AddComments'
import { getPostCommentApi } from '../Services/CommentsServices'
import { DeletePostApi} from '../Services/PostServices'
import EditPost from './Card/EditPost'
export default function PostCard({post ,commentLength,callBack}) {
  const [comment, setComment] = useState(post.comments);
  const [loadingDeletePost, setLoadingDeletePost] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  async function getPostComments() {
    const response = await getPostCommentApi(post.id);
    setComment(response.comments);
  }
  async function deletePost() {
     setLoadingDeletePost(true);
    const res = await DeletePostApi(post._id);
    if(res.message){
      console.log(res);
      await callBack();
    }
    setLoadingDeletePost(false);
  }
  
  return (
    <>
      <div className="bg-white rounded-md dark:bg-gray-900 dark:text-gray-100 shadow-2xl dark:shadow-gray-800 shadow-cyan-100 mt-4 p-3 relative transition-colors duration-300">
        <PostHeader setIsEditing={setIsEditing} loadingDeletePost={loadingDeletePost} deletePost={deletePost} name={post.user.name} date={post.createdAt} image={post.user.photo} UserId={post.user._id} />
        <PostBody body={post.body} image={post.image}/>
        <PostNumReacts num={comment.length} postId={post.id}/>
        <PostReacts/>
      <AddComments  setComment={setComment} postId={post.id}/>
        <div className='space-y-4'>
        {comment.length > 0 && comment.slice(0,commentLength).map((comment)=><PostComments callBack={getPostComments} commentUserId={comment.commentCreator._id} postUserId={post.user._id}  name={comment.commentCreator.name} key={comment._id} commentId={comment._id} photo={comment.commentCreator.photo} date={comment.createdAt} content={comment.content}/>)}
        </div>
      </div>
      {isEditing && (
        <EditPost
          oldBody={post.body}
          oldImage={post.image}
          setIsEditing={setIsEditing} 
          callBack={callBack}
          postId={post._id}
        />
      )}
    </>
  )
}
