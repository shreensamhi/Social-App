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


const routers = createBrowserRouter([{path:'',element:<MainLayout/>,children:[
  {index:true , element:<Feed/>},
  {path:'profile' , element:<Profile/>},
  {path:'post-details' , element:<PostDetails/>},
  {path:'*' , element:<NotFound/>},
]},
{path:'',element:<AuthLayout/>,children:[
{path:'login' , element:<Login/>},
{path:'register' , element:<Register/>}
]}
])
function App() {

  return (
  <>
<RouterProvider router={routers}/>
  </>
  )
}

export default App
