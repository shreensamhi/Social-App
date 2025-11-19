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

export async function deleteCommentApi( commentId) {
  try{
      const {data} = await axios.delete('https://linked-posts.routemisr.com/comments/'+commentId,{
      headers:{
        token:localStorage.getItem('token')
      }
  })
  return data
  }catch(err){
      return err.response.data
  }
}
export async function editCommentApi( commentId ,content) {
  try{
      const {data} = await axios.put('https://linked-posts.routemisr.com/comments/'+commentId,{
        content
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

export async function getPostCommentApi( postId) {
  try{
      const {data} = await axios.get('https://linked-posts.routemisr.com/posts/'+postId+'/comments',{
      headers:{
        token:localStorage.getItem('token')
      }
  })
  return data
  }catch(err){
      return err.response.data
  }
}