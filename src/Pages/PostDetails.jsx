import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePostsApi } from '../Services/PostServices'
import PostCard from '../Components/PostCard';
import LoadingScreen from '../Components/LoadingScreen';

export default function PostDetails() {
const {id}=  useParams()
const [post, setPost] = useState(null);
async function getPost() {
  const response = await getSinglePostsApi(id);
  if(response.message){
      setPost(response.post)
  }
}
    useEffect(()=>{
      getPost();
    },[])

  return (
    <>
    <div className="container">
      {post ? <PostCard post={post} commentLength={post.comments.length}/> :<LoadingScreen/>}
    </div>
    </>
  )
}
