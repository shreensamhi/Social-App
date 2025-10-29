import axios from "axios";
export default async function signUp(userData) {
  try{
    let {data} = await axios.post('https://linked-posts.routemisr.com/users/signup',userData);
    return data
  }
  catch(err){
      return err.response.data
  }
}
