import React, { useEffect, useState } from 'react'
import PostCard from '../Components/PostCard'
import { getAllPostsApi } from '../Services/PostServices';
import LoadingScreen from '../Components/LoadingScreen';
import FeedSideBar from '../Components/FeedSideBar';
import CreatePost from '../Components/CreatePost';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  async function getPosts(){
    const res =await getAllPostsApi();
    setPosts(res.posts);
  }
  useEffect(()=>{
    getPosts();
  },[])
  return (
    <>
    {posts.length == 0? 
    <div className="container flex space-x-2">
      <div className="w-1/3 space-y-2">
      <LoadingScreen/>
      <LoadingScreen/>
      </div>
      <div className="w-2/3 space-y-2">
      <LoadingScreen/> <LoadingScreen/> <LoadingScreen/>
      </div>
    </div>
    :
  <div className="container flex">
        <FeedSideBar/>
        <div className="w-2/3 space-y-2">
            <CreatePost callBack={getPosts}/>
            { posts.map((post)=>  <PostCard commentLength={1} post={post} key={post.id}/> )}
            
        </div>
    </div>
    }

    
    </>
  )
}
