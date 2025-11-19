import axios from "axios";

export async function getUserPostsApi(userId){
  try{
    const {data} = await axios.get('https://linked-posts.routemisr.com/users/'+userId+'/posts',{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    
    data.posts = data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return data
  }catch(err){
      return err.response.data
  }
}

export async function uploadImageProfileApi( formData) {
  try{
      const {data} = await axios.put('https://linked-posts.routemisr.com/users/upload-photo',formData,{
      headers:{
        token:localStorage.getItem('token')
      }
  })
  return data
  }catch(err){
      return err.response.data
  }
}


export  async function changePasswordApi(userData) {
  try{
    let {data} = await axios.patch('https://linked-posts.routemisr.com/users/change-password',userData,{
      headers:{
        token:localStorage.getItem('token')
      }
    });
    return data
  }
  catch(err){
      return err.response.data
  }
}