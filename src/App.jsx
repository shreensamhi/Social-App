import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import Feed from './Pages/Feed'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import PostDetails from './Pages/PostDetails'
import Register from './Pages/Register'
import NotFound from './Pages/NotFound'
import AuthLayout from './Layouts/AuthLayout'
import ProtectedRoute from './Components/ProtectedRoute'
import AuthProtected from './Components/AuthProtected'
import {ScrollShadow} from "@heroui/react";

const routers = createBrowserRouter([{path:'',element:<MainLayout/>,children:[
  {index:true , element:<ProtectedRoute><Feed/></ProtectedRoute>},
  {path:'profile' , element:<ProtectedRoute><Profile/></ProtectedRoute>},
  {path:'post-details/:id' , element:<ProtectedRoute><PostDetails/></ProtectedRoute>},
  {path:'*' , element:<NotFound/>},
]},
{path:'',element:<AuthLayout/>,children:[
{path:'login' , element:<AuthProtected><Login/></AuthProtected>},
{path:'register' , element:<AuthProtected><Register/></AuthProtected>}
]}
])
function App() {

  return (
  <>
<RouterProvider  router={routers}/>
  </>
  )
}

export default App
