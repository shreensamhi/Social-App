import React,{useState} from 'react'
import {Input ,DatePicker ,Select, SelectItem, Button} from "@heroui/react";
import { useForm ,Controller} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod'
import signUp from '../Services/AuthServices';
import { useNavigate ,Link, NavLink} from 'react-router-dom';



const schema= zod.object({
  name:zod.string().nonempty('name is required').min(3,'name at least 3 char').max(20,'name at most 20 char'),
  email:zod.string().nonempty('email is required').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Invalid email format'),
  password:zod.string().nonempty('password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'Password must contain at least 6 characters, one letter and one number'),
  rePassword:zod.string().nonempty('rePassword is required'),
  dateOfBirth:zod.coerce.date('date is required').refine((value)=>{
    const userAge = value.getFullYear();
    const now = new Date().getFullYear();
    const age = now - userAge;    
    return age>=18
  },'age less than 18'),
  gender:zod.string().nonempty('password is required')
}).refine((data)=>data.password === data.rePassword , {path:['rePassword'],message:'repassword and password must be same'})



export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorApi, setErrorApi] = useState(null);
let{handleSubmit,register ,control ,formState:{errors ,touchedFields}} =  useForm({
    defaultValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      dateOfBirth:null,
      gender:''
    },
    resolver:zodResolver(schema),
    mode:'onBlur',
    reValidateMode:'onBlur'
  })

  const navigate = useNavigate();
  async function sendData(userData){
    console.log(userData);
    setIsLoading(true);
    const res = await signUp(userData);
    console.log(res);
    setIsLoading(false);
    if(res.message == 'success'){
          navigate('/login')
    }else{
      setErrorApi(res.error)
    }
    
  }
return (
  <>
    <div className="relative w-full h-screen flex justify-center items-center bg-linear-to-br from-cyan-400 to-blue-600 dark:from-gray-400 dark:to-black overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff33"
          fillOpacity="1"
          d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L0,320Z"
        ></path>
      </svg>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-gray-950 py-10 px-10 min-w-md">
        <h1 className="text-2xl text-center font-semibold mb-4 text-gray-800 dark:text-white">
          Registration Form
        </h1>

        <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-4">
          <Input
            isInvalid={Boolean(errors.name && touchedFields.name)}
            errorMessage={errors.name?.message}
            label="Name"
            type="text"
            {...register("name")}
            isRequired
            isClearable
            placeholder="Enter your name"
          />
          <Input
            isInvalid={Boolean(errors.email && touchedFields.email)}
            errorMessage={errors.email?.message}
            label="Email"
            type="email"
            {...register("email")}
            isRequired
            isClearable
            placeholder="Enter your email"
          />
          <Input
            isInvalid={Boolean(errors.password && touchedFields.password)}
            errorMessage={errors.password?.message}
            label="Password"
            type="password"
            {...register("password")}
            isRequired
            isClearable
            placeholder="Enter your password"
          />
          <Input
            isInvalid={Boolean(errors.rePassword && touchedFields.rePassword)}
            errorMessage={errors.rePassword?.message}
            label="RePassword"
            type="password"
            {...register("rePassword")}
            isRequired
            isClearable
            placeholder="Enter same password"
          />
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Birth date"
                isInvalid={Boolean(errors.dateOfBirth && touchedFields.dateOfBirth)}
                errorMessage={errors.dateOfBirth?.message}
                value={field.value}
                onChange={(date) => field.onChange(date)}
                isRequired
              />
            )}
          />
          <Select
            isInvalid={Boolean(errors.gender && touchedFields.gender)}
            errorMessage={errors.gender?.message}
            label="Select Your Gender"
            {...register("gender")}
            isRequired
            isClearable
          >
            <SelectItem key={"male"}>Male</SelectItem>
            <SelectItem key={"female"}>Female</SelectItem>
          </Select>

          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            className="bg-cyan-400 hover:bg-cyan-500 border-0 text-white dark:bg-gray-700 dark:hover:bg-gray-900"
            variant="ghost"
          >
            Create Account
          </Button>

          {errorApi && <span className="text-center text-red-700 dark:text-red-400">{errorApi}</span>}

          <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-3">
            Already have an account?{" "}
            <NavLink
              to={"/"}
              className="text-blue-600 dark:text-cyan-400 font-medium cursor-pointer hover:underline"
            >
              Sign in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  </>
);

}
