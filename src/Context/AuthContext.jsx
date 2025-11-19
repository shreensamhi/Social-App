import { createContext, useEffect, useState } from "react";
import { getUserDataApi } from "../Services/AuthServices";


export const AuthContext = createContext();

export default function AuthContextProvider({children}){
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')!=null);
  const [userData, setUserData] = useState(null);
    async function getUserData(){
        const response = await getUserDataApi();
        if(response.message){
          setUserData(response.user);  
        }
      }
  useEffect(()=>{
    if(isLoggedIn){
      getUserData();
    }
  },[isLoggedIn])
  return <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,userData,setUserData ,getUserData}}>
    {children}
  </AuthContext.Provider>

}
