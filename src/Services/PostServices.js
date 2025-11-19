import axios from "axios";

export async function getAllPostsApi(){
  try{
    const {data} = await axios.get('https://linked-posts.routemisr.com/posts',{
      headers:{
        token:localStorage.getItem('token')
      },params:{
        sort:'-createdAt'
      }
    })
    return data
  }catch(err){
      return err.response.data
  }
}


export async function getSinglePostsApi(id){
  try{
    const {data} = await axios.get('https://linked-posts.routemisr.com/posts/'+id,{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    return data
  }catch(err){
      return err.response.data
  }
}


export async function CreatePostApi(formData){
  try{
    const {data} = await axios.post('https://linked-posts.routemisr.com/posts',formData,{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    return data
  }catch(err){
      return err.response.data
  }
}

export async function DeletePostApi(postId){
  try{
    const {data} = await axios.delete('https://linked-posts.routemisr.com/posts/'+postId,{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    return data
  }catch(err){
      return err.response.data
  }
}

export async function EditPostApi(postId ,formData){
  try{
    const {data} = await axios.put('https://linked-posts.routemisr.com/posts/'+postId,formData,{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    return data
  }catch(err){
      return err.response.data
  }
}