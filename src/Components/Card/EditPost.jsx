import { useContext, useState } from "react";
import { EditPostApi } from "../../Services/PostServices";
import { AuthContext } from "../../Context/AuthContext";

export default function EditPost({ oldBody, oldImage,setIsEditing,callBack,postId}) {
  const [postBody, setPostBody] = useState(oldBody);
    const [image, setImage] = useState(oldImage);
    const [imageUrl, setImageUrl] = useState(oldImage);
      const {userData} = useContext(AuthContext);
      const [loadingEdit, setLoadingEdit] = useState(false);
    function handleImage(e){
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      e.target.value= ''
    }
      async function editPost(){
      const formData = new FormData();
    if(postBody)formData.append('body',postBody);
    if(image)formData.append('image',image);
    console.log(formData);
    setLoadingEdit(true)
    const res = await EditPostApi(postId,formData);
    if(res.message){
      console.log(res);
      await  callBack();
      setPostBody('');
      setImage(null);
      setImageUrl('');
    }
    setLoadingEdit(false);
    setIsEditing(false);
    }


  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-4 w-full max-w-lg">

        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Edit Post</h1>
          <button onClick={()=>{setIsEditing(false)}} className="text-gray-500 text-2xl cursor-pointer">&times;</button>
        </div>
  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-2">
    <ul className="flex items-center list-reset font-bold text-xs text-gray-700 dark:text-gray-300">
      <li className="flex items-center px-2 border-r border-gray-300 dark:border-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 1792 1792">
          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/>
        </svg>
        <span className="px-1">Make Post</span>
      </li>

      <li className="px-2 border-r border-gray-300 dark:border-gray-700 hover:text-blue-500 transition-colors">
        <label className='flex items-center cursor-pointer'>
        <input type="file" onChange={handleImage} className='hidden'  />
        <svg className="w-4 h-4 fill-current" viewBox="0 0 2048 1792">
          <path d="M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"/>
        </svg>
        <span className="px-1">Photo/Video</span>
        </label>
      </li>

      <li className="flex items-center px-2 border-r border-gray-300 dark:border-gray-700 cursor-pointer hover:text-blue-500 transition-colors">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 1792 1792">
          <path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"/>
        </svg>
        <span className="px-1">Live Video</span>
      </li>

      <li className="flex items-center px-2 cursor-pointer hover:text-blue-500 transition-colors">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 1792 1792">
          <path d="M320 256q0 72-64 110v1266q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-1266q-64-38-64-110 0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm1472 64v763q0 25-12.5 38.5t-39.5 27.5q-215 116-369 116-61 0-123.5-22t-108.5-48-115.5-48-142.5-22q-192 0-464 146-17 9-33 9-26 0-45-19t-19-45v-742q0-32 31-55 21-14 79-43 236-120 421-120 107 0 200 29t219 88q38 19 88 19 54 0 117.5-21t110-47 88-47 54.5-21q26 0 45 19t19 45z"/>
        </svg>
        <span className="px-1">Life Event</span>
      </li>
    </ul>
  </div>

  <div className="mt-3">
    <div className="flex gap-2">
      <img alt="" className="block w-10 h-10 rounded-full mt-2" src={userData?.photo} />
      <textarea value={postBody} onChange={(e)=>setPostBody(e.target.value)}
        className="appearance-none resize-none flex-1 ml-2 mt-4 rounded-md p-2 
                   bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                   border border-gray-300 dark:border-gray-700 placeholder-gray-400 
                   dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
        placeholder="What's on your mind?"
      />
    </div>
     {imageUrl && (
    <div className="mt-4 relative w-full flex justify-center">
      <img
        src={imageUrl}
        alt="Selected"
        className="max-h-60 rounded-md object-cover border border-gray-300 dark:border-gray-700"
      />
      <button
        onClick={() => {
          setImage(null);
          setImageUrl(null);
        }}
        className="absolute cursor-pointer top-2 right-2 bg-black/60 text-white px-2 py-1 rounded hover:bg-black/80 text-xs"
      >
        ✕ 
      </button>
    </div>
  )}
  </div>
  <div className="flex justify-end text-xs mt-4">
    <button className="border p-2 rounded mr-4 flex items-center border-gray-300 dark:border-gray-700 
                       text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
    
      <span className="px-2">Public</span>
      <svg className="h-4 w-4 fill-current" viewBox="0 0 1792 1792">
        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/>
      </svg>
    </button>
<button
            onClick={editPost}
            disabled={loadingEdit}
            className={`py-2 px-6 rounded transition-colors flex items-center justify-center ${
              loadingEdit
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            {loadingEdit ? (
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
                Save...
              </>
            ) : (
              'Save'
            )}
          </button>
  </div>

      </div>
    </div>
  );
}
