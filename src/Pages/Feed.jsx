import React, { useEffect, useState } from 'react'
import PostCard from '../Components/PostCard'
import { getAllPostsApi } from '../Services/PostServices';
import LoadingScreen from '../Components/LoadingScreen';
import FeedSideBar from '../Components/FeedSideBar';
import CreatePost from '../Components/Card/CreatePost';
import { Helmet } from 'react-helmet';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  async function getPosts(){
    const res =await getAllPostsApi();
    setPosts(res?.posts ?? []);
  }
  useEffect(()=>{
    getPosts();
  },[])
  
  return (
    <>
    <Helmet><title>Feed</title></Helmet>
    {!posts || posts.length === 0 ? 
    <div className="bg-gray-100 dark:bg-gray-900 pt-4">
    <div className="container flex space-x-2">
      <div className="w-1/3 space-y-2">
      <LoadingScreen/>
      <LoadingScreen/>
      </div>
      <div className="w-2/3 space-y-2">
      <LoadingScreen/> <LoadingScreen/> <LoadingScreen/>
      </div>
    </div>
    </div>
    :
    <div className="bg-gray-100 dark:bg-gray-900  pt-4">
  <div className="container flex">
        <FeedSideBar/>
        <div className="lg:w-2/3 w-full space-y-2">
            <CreatePost callBack={getPosts}/>
            { posts.map((post)=>  <PostCard callBack={getPosts} commentLength={1} post={post} key={post.id}/> )}
            
        </div>
    </div>
    </div>
    }

    
    </>
  )
}
