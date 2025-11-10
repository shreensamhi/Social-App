import axios from "axios";

export async function addCommentApi(commentContent , postId) {
  try{
      const {data} = await axios.post('https://linked-posts.routemisr.com/comments',{
    content:commentContent,
    post:postId
  },{
      headers:{
        token:localStorage.getItem('token')
      }
  })
  return data
  }catch(err){
      return err.response.data
  }
}