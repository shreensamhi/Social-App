import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Context/AuthContext";
import {
  getUserPostsApi,
  uploadImageProfileApi,
} from "../Services/UserServices";
import PostCard from "../Components/PostCard";
import CreatePost from "../Components/Card/CreatePost";
import cover from "../assets/cover.jpg";
import LoadingProfile from "../Components/LoadingProfile";
import ChangePassword from "../Components/ChangePassword";

export default function Profile() {
  const { userData, getUserData } = useContext(AuthContext);
  const [userPost, setUserPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingProfileImage, setLoadingProfileImage] = useState(false);
  const [image, setImage] = useState(null);
  const [imageProfile, setImageProfile] = useState(null);
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const [statePassword, setStatePassword] = useState(false);
  async function userPosts() {
    setLoading(true);
    const res = await getUserPostsApi(userData._id);
    if (res.message) {
      setUserPost(res.posts);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (userData) {
      userPosts();
      setImageProfile(userData.photo);
    }
  }, [userData]);

  function handleImage(e) {
    setImage(e.target.files[0]);
    if (e.target.files[0]) setShowSaveBtn(true);
  }
  async function changeImage() {
    setLoadingProfileImage(true);
    const formData = new FormData();
    if (image) formData.append("photo", image);
    const res = await uploadImageProfileApi(formData);
    if (res.message) {
      getUserData();
      setLoadingProfileImage(false);
      setShowSaveBtn(false);
    }
  }
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {loading ? (
        <LoadingProfile />
      ) : (
        <>
        <div className="container">
            <div className="w-full h-60 bg-blue-300 dark:bg-blue-800 rounded-xl relative">
              <img
                src={cover}
                className="w-full h-full object-cover rounded-xl"
                alt="Cover"
              />

              <div className="absolute -bottom-16 left-6">
                {imageProfile && (
                  <img
                    src={imageProfile}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white"
                  />
                )}
              </div>
            </div>

            <div className="mt-20 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {userData?.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  1,250 friends
                </p>
              </div>

              <div className="flex gap-3">
                <button className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800">
                  Add to Story
                </button>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="file"
                    onChange={handleImage}
                    className="hidden"
                  />

                  <div
                    className="bg-gray-200 dark:bg-gray-700 dark:text-white text-black 
              px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Edit Profile
                  </div>
                </label>
                {showSaveBtn && (
                  <button
                    onClick={changeImage}
                    disabled={loadingProfileImage}
                    className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 
               flex items-center justify-center min-w-28"
                  >
                    {loadingProfileImage ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 mr-2 text-white"
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
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                          ></path>
                        </svg>
                        Saving...
                      </>
                    ) : (
                      "Save Image"
                    )}
                  </button>
                )}
              </div>
            </div>
            <div className="border-b border-gray-300 dark:border-gray-700 mt-6 flex gap-6 text-gray-600 dark:text-gray-300 font-medium">
              <button className="py-3 border-b-2 border-blue-600 text-blue-600 dark:text-blue-400">
                Posts
              </button>
              <button className="py-3 hover:text-black dark:hover:text-white">
                About
              </button>
              <button className="py-3 hover:text-black dark:hover:text-white">
                Friends
              </button>
              <button className="py-3 hover:text-black dark:hover:text-white">
                Photos
              </button>
              <button className="py-3 hover:text-black dark:hover:text-white">
                Videos
              </button>
            </div>

            <div className="mt-6 flex gap-5">
              <div className="lg:w-1/3 hidden lg:flex flex-col bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Intro
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Front-end Developer
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Lives in Giza
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Student at Computer Science Faculty
                </p>
                <p onClick={()=>setStatePassword(true)} className="text-blue-600 dark:text-cyan-400 font-medium cursor-pointer hover:underline">
                  Change Password
                </p>
              </div>

              <div className="flex-1 space-y-4">
                <CreatePost callBack={userPosts} />

                <div className="space-y-2">
                  {userPost?.map((post) => (
                    <PostCard callBack={userPosts} commentLength={1} post={post} key={post.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {statePassword && <ChangePassword setStatePassword={setStatePassword}/>}
        </>
          
      )}
    </>
  );
}
