import React ,{useContext, useState} from 'react'
import {useNavigate , Link} from 'react-router-dom';
import { useForm ,Controller} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button ,Input} from '@heroui/react'
import {signIn} from '../Services/AuthServices'
import {schema} from '../Schema/SchemaLogin.js'
import { AuthContext } from '../Context/AuthContext.jsx';


export default function Login() {
  const {setIsLoggedIn} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorApi, setErrorApi] = useState(null);
const navigate =useNavigate('/');
let {handleSubmit,register,formState:{errors,touchedFields}}  = useForm({
    defaultValues:{
      email:'',
      password:''
    },
    resolver:zodResolver(schema),
    mode:'onBlur',
    reValidateMode:'onBlur'
  })

async function sendData(userData) {
  setIsLoading(true)
const res =  await signIn(userData)
  setIsLoading(false);
    if(res.message == 'success'){
      localStorage.setItem('token' , res.token);
      setIsLoggedIn(res.token);
          navigate('/');
    }else{
      setErrorApi(res.error)
    }
}
  return (
    <>
    <div className="relative w-full h-screen flex justify-center items-center bg-linear-to-br from-cyan-400 to-blue-600 dark:from-gray-400 dark:to-black overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff33"
          fillOpacity="1"
          d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L0,320Z"
        ></path>
      </svg>

    <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-gray-950 dark:shadow-white py-10 px-10 min-w-md z-10'>
    <h1 className='text-2xl text-center font-semibold mb-4 text-gray-800 dark:text-white'>Login Form</h1>
    <form onSubmit={handleSubmit(sendData)} className='flex flex-col gap-4'>
          <Input type='email' label='Email' {...register('email')} isInvalid={Boolean(errors.email && touchedFields.email)}  errorMessage={errors.email?.message} placeholder='Enter Your Email' isRequired  />
          <Input type='password' label='Password' {...register('password')} isInvalid={Boolean(errors.password && touchedFields.password)} errorMessage={errors.password?.message} placeholder='Enter Your Password' isRequired  />
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            className="bg-cyan-400 hover:bg-cyan-500 border-0 dark:text-white text-base dark:bg-gray-950 dark:hover:bg-gray-900"
            variant="ghost"
          >
            Login
          </Button>
          {errorApi && <span className="text-center text-red-700 dark:text-red-400">{errorApi}</span>}
          <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-3">
          Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-600 dark:text-cyan-400 font-medium cursor-pointer hover:underline">Sign up</Link>
          </p>
    </form>
    </div>
      </div>
    
    </>
  )
}
